import { useState, useEffect, useMemo, type ReactNode } from 'react';
import { useParams } from 'react-router';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

import colors from 'client/styles/colors';
import Modal from 'client/components/Form/Modal';
import Loader from 'client/components/misc/Loader';
import ErrorBoundary from 'client/components/misc/ErrorBoundary';
import DocContent from 'client/components/misc/DocContent';
import ProgressBar, {
  type LoadingJob,
  type LoadingState,
} from 'client/components/misc/ProgressBar';
import ActionButtons from 'client/components/misc/ActionButtons';
import AdditionalResources from 'client/components/misc/AdditionalResources';
import AdvisoryPanel from 'client/components/misc/AdvisoryPanel';
import NoResults from 'client/components/misc/NoResults';
import ResultsMasonryGrid from 'client/components/misc/ResultsMasonryGrid';
import ViewRaw from 'client/components/misc/ViewRaw';

import { determineAddressType, type AddressType } from 'client/utils/address-type-checker';
import { hasData } from 'client/utils/result-processor';
import keys from 'client/utils/get-keys';
import { getSetting } from 'client/utils/settings';
import { strings } from 'client/i18n';
import useJobs from 'client/hooks/useJobs';
import { isCategory } from '@/data/categories';
import { checks, isCheck } from '@/data/checks';
import { jobsFor, cardsFor } from 'client/jobs/registry';
import { runAnalysis } from 'client/analysis/registry';

const ResultsOuter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResultsContent = styled.section`
  width: var(--page-width);
  margin: 0 auto;
  @keyframes cardFlash {
    0%,
    30% {
      outline: 2px solid ${colors.primary};
      outline-offset: 4px;
    }
    100% {
      outline: 2px solid transparent;
      outline-offset: 4px;
    }
  }
  .flash > section {
    animation: cardFlash 1.2s ease-out;
    border-radius: 4px;
  }
`;

const makeActionButtons = (title: string, refresh: () => void, showInfo: () => void): ReactNode => {
  const t = strings();
  return (
    <ActionButtons
      lang={t.lang}
      actions={[
        { label: t.card.info(title), onClick: showInfo, icon: 'ⓘ' },
        { label: t.card.refresh(title), onClick: refresh, icon: '↻' },
      ]}
    />
  );
};

const Results = (props: { address?: string }): JSX.Element => {
  const { urlToScan, tool = '' } = useParams();
  const address = props.address || urlToScan || '';
  const addressType: AddressType = useMemo(() => determineAddressType(address), [address]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(<></>);
  const t = strings();

  // Optional category or check in the path narrows the scan, unknown values fall back to everything
  const category = isCategory(tool) ? tool : undefined;
  const check = isCheck(tool) ? tool : undefined;
  const skip = useMemo(() => getSetting('skippedChecks') as string[], []);
  const activeJobs = useMemo(() => jobsFor({ category, check, skip }), [category, check, skip]);
  const activeCards = useMemo(() => cardsFor({ category, check, skip }), [category, check, skip]);

  const { state: jobsState, retry, ipLookupError } = useJobs(address, addressType, activeJobs);

  // Shape useJobs state for the existing ProgressBar contract
  const loadingJobs: LoadingJob[] = useMemo(
    () =>
      activeCards.map(({ card: { id } }) => {
        const e = jobsState[id] || { state: 'loading' as LoadingState };
        return {
          id,
          name: t.checks[id],
          state: e.state,
          error: e.error,
          timeTaken: e.timeTaken,
          retry: () => retry(id),
        };
      }),
    [jobsState, retry, activeCards, t],
  );

  // Expose successful job results on window.webCheck for debugging
  useEffect(() => {
    (window as any).webCheck = {};
  }, [address]);
  useEffect(() => {
    const w = (window as any).webCheck;
    if (!w) return;
    Object.entries(jobsState).forEach(([id, entry]) => {
      if (entry?.state === 'success' && entry.raw !== undefined) {
        w[id] = entry.raw;
      }
    });
  }, [jobsState]);

  const showInfo = (id: string) => {
    setModalContent(DocContent(id));
    setModalOpen(true);
  };

  const showErrorModal = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  // Resolve each card's data, applying picker and falling back when needed
  const renderable = activeCards.map(({ jobId, card }) => {
    const entry = jobsState[card.id];
    const raw = entry?.raw;
    let data = raw && card.pick ? card.pick(raw) : raw;
    if (!hasData(data) && card.fallback) data = card.fallback(jobsState);
    return { jobId, card, data, entry, title: t.checks[card.id] };
  });

  const cardsToShow = renderable.filter(({ data, entry }) => hasData(data) && !entry?.error);

  const findings = useMemo(() => runAnalysis(jobsState, activeCards), [jobsState, activeCards]);

  // Show the loader until the first few checks have settled
  const settled = loadingJobs.filter((j) => j.state !== 'loading').length;
  const loading = settled < Math.min(35, loadingJobs.length);

  // Detect a catastrophic API outage when the bulk of settled jobs error or time out
  const apiUnreachable = useMemo(() => {
    const entries = Object.values(jobsState);
    const settled = entries.filter((e) => e?.state !== 'loading');
    const dead = settled.filter((e) => e?.state === 'error' || e?.state === 'timed-out');
    return settled.length >= entries.length / 2 && dead.length / settled.length >= 0.9;
  }, [jobsState]);

  // Every check settled as skipped, e.g. when the admin has blocked the target host
  const allSkipped = useMemo(() => {
    const entries = Object.values(jobsState);
    return entries.length > 0 && entries.every((e) => e?.state === 'skipped');
  }, [jobsState]);
  const skipReason = allSkipped ? Object.values(jobsState).find((e) => e?.error)?.error : undefined;

  // Pick the highest-priority error state, if any
  let errorKind: 'invalid' | 'unreachable' | 'api-down' | 'disabled' | 'blocked' | null = null;
  if (keys.disableEverything) {
    errorKind = 'disabled';
  } else if (addressType === 'err') {
    errorKind = 'invalid';
  } else if (ipLookupError) {
    errorKind = 'unreachable';
  } else if (allSkipped) {
    errorKind = 'blocked';
  } else if (apiUnreachable) {
    errorKind = 'api-down';
  }

  const jumpToCard = (id: string) => {
    const el = document.getElementById(`card-${id}`);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
    window.setTimeout(() => el.classList.remove('flash'), 1300);
  };

  return (
    <ResultsOuter>
      {errorKind && (
        <NoResults kind={errorKind} address={address} error={ipLookupError || skipReason} />
      )}
      <ProgressBar loadStatus={loadingJobs} showModal={showErrorModal} showJobDocs={showInfo} />
      <Loader show={loading} jobs={loadingJobs} />
      {!errorKind && (
        <>
          <AdvisoryPanel findings={findings} onJumpTo={jumpToCard} />
          <ResultsContent>
            <ResultsMasonryGrid minColWidth={336}>
              {cardsToShow.map(({ card, data, title }) => (
                <div id={`card-${card.id}`} key={`eb-${card.id}`}>
                  <ErrorBoundary title={title}>
                    <card.Component
                      key={card.id}
                      data={data}
                      title={title}
                      actionButtons={makeActionButtons(
                        title,
                        () => retry(card.id),
                        () => showInfo(card.id),
                      )}
                    />
                  </ErrorBoundary>
                </div>
              ))}
            </ResultsMasonryGrid>
          </ResultsContent>
          {!loading && (
            <ViewRaw everything={renderable.map((r) => ({ id: r.card.id, result: r.data }))} />
          )}
        </>
      )}
      {!loading && (
        <AdditionalResources
          url={address}
          categories={check ? checks[check].categories : category && [category]}
        />
      )}

      <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)}>
        {modalContent}
      </Modal>
      <ToastContainer
        limit={3}
        draggablePercent={60}
        autoClose={2500}
        theme="dark"
        position="bottom-right"
      />
    </ResultsOuter>
  );
};

export default Results;
