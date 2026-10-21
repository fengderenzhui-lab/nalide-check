import { Component, type ErrorInfo, type ReactNode } from 'react';
import styled from '@emotion/styled';
import Card from 'client/components/Form/Card';
import Heading from 'client/components/Form/Heading';
import colors from 'client/styles/colors';
import { strings } from 'client/i18n';

interface Props {
  children: ReactNode;
  title?: string;
  key?: string;
}

interface State {
  hasError: boolean;
  errorMessage: string | null;
}

const ErrorText = styled.p`
  color: ${colors.danger};
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: null,
  };

  // Catch errors in any components below and re-render with error message
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      const t = strings();
      return (
        <Card lang={t.lang}>
          {this.props.title && <Heading color={colors.primary}>{this.props.title}</Heading>}
          <ErrorText>{t.card.crashed}</ErrorText>
          <p>{t.card.crashedHelp}</p>
          {this.state.errorMessage && (
            <details>
              <summary>{t.card.errorDetails}</summary>
              <div lang="en">{this.state.errorMessage}</div>
            </details>
          )}
        </Card>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
