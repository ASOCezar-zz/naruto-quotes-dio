import { render, screen, fireEvent } from '@testing-library/react';
import Quotes from './Quotes';

describe('<Quotes />', () => {
  const quote = 'Testing Quote';
  const speaker = 'Testing Speaker';
  const callback = jest.fn();

  it('Should render a quote component with a button', () => {
    render(<Quotes quotes={quote} speaker={speaker} handleClick={callback} />);

    const quoteEl = screen.getByText(/Testing Quote/i);
    const speakerEl = screen.getByText(/Testing Speaker/i);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });

  it('Should call a function when button were pressed', () => {
    render(<Quotes quotes={quote} speaker={speaker} handleClick={callback} />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toBeCalledTimes(1);
  });
});
