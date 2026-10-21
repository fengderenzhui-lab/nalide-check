import styled from '@emotion/styled';
import Button from 'client/components/Form/Button';
import colors from 'client/styles/colors';

const ActionButtonContainer = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  opacity: 0.75;
  display: flex;
  gap: 0.125rem;
  align-items: baseline;
`;

interface Action {
  label: string;
  icon: string;
  onClick: () => void;
}

const actionButtonStyles = `
  padding: 0 0.25rem;
  font-size: 1rem;
  text-align: center;
  width: 1.5rem;
  height: 1.5rem;
  color: ${colors.textColor};
  background: none;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  margin: 0;
  display: flex;
  align-items: center;
  &:hover {
    color: ${colors.primary};
    background: ${colors.backgroundSunken};
    box-shadow: none;
  }
`;

const ActionButtons = (props: { actions: any; lang?: string }): JSX.Element => {
  const actions = props.actions;
  if (!actions) return <></>;
  return (
    <ActionButtonContainer lang={props.lang}>
      {actions.map((action: Action, index: number) => (
        <Button
          key={`action-${index}`}
          styles={actionButtonStyles}
          onClick={action.onClick}
          title={action.label}
        >
          {action.icon}
        </Button>
      ))}
    </ActionButtonContainer>
  );
};

export default ActionButtons;
