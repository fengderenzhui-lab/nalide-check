import styled from '@emotion/styled';
import colors from 'client/styles/colors';
import { StyledCard } from 'client/components/Form/Card';
import Heading from 'client/components/Form/Heading';
import { strings } from 'client/i18n';

const Wrapper = styled(StyledCard)`
  margin: 0 auto;
  width: var(--page-width);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  .target {
    font-family: var(--font-mono);
    background: ${colors.background};
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    word-break: break-all;
    align-self: flex-start;
    max-width: 100%;
    color: ${colors.textColor};
  }
  .reasons {
    margin: 0;
    padding-left: 1.25rem;
    color: ${colors.textColorSecondary};
    li {
      padding: 0.15rem 0;
    }
  }
  .detail {
    color: ${colors.textColorSecondary};
    font-size: 0.85rem;
    word-break: break-word;
  }
`;

type Kind = 'unreachable' | 'invalid' | 'api-down' | 'disabled' | 'blocked';

interface Props {
  address: string;
  error?: string;
  kind?: Kind;
}

// Surface a friendly explanation when input is invalid or the host is unreachable
const NoResults = ({ address, error, kind = 'unreachable' }: Props): JSX.Element => {
  const t = strings();
  const { title, description, reasons } = t.noResults[kind];
  return (
    <Wrapper role="alert" lang={t.lang}>
      <Heading as="h2" align="left" color={colors.danger}>
        {title}
      </Heading>
      <p>{description}</p>
      <code className="target">{address}</code>
      <p>{t.noResults.possibleReasons}</p>
      <ul className="reasons">
        {reasons.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      {error && (
        <span className="detail">
          {kind === 'blocked' ? t.noResults.reason : t.noResults.lookupError}{' '}
          <span lang="en">{error}</span>
        </span>
      )}
    </Wrapper>
  );
};

export default NoResults;
