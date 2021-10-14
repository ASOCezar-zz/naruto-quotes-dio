import * as Styled from './styles';

type ButtonProps = {
  children: string;
  onClick: () => void;
};

export const ButtonComponent = ({ children, onClick }: ButtonProps) => (
  <Styled.Button onClick={onClick}>{children}</Styled.Button>
);
