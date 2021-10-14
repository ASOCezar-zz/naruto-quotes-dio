import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  const callback = jest.fn();
  it('Should render a button with a text inside', () => {
    render(<Button onClick={callback}>Quote No Jutsu</Button>);
    const buttonEl = screen.getByText(/Quote No Jutsu/i);

    expect(buttonEl).toBeInTheDocument();
  });
});
