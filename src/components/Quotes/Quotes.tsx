import Button from '../Button';
import * as Styled from './styles';

type QuoteProps = {
  quotes?: string;
  speaker?: string;
  handleClick: () => void;
};

const QuoteComponent = ({ quotes, speaker, handleClick }: QuoteProps) => (
  <Styled.Wrapper>
    <Styled.Quote>{quotes}</Styled.Quote>
    <Styled.Speaker>{speaker}</Styled.Speaker>
    <Button onClick={handleClick}>Quote No Jutsu</Button>
  </Styled.Wrapper>
);

export default QuoteComponent;
