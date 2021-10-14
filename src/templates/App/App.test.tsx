import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

describe('<App />', () => {
  const response = { speaker: 'Testing Speaker', quote: 'Testing Quote' };

  const server = setupServer(
    rest.get('http://127.0.0.1:5000', (req, res, ctx) => {
      return res(ctx.json(response));
    }),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('Should render a screen with a image, a button and a quote', () => {
    render(<App />);
    const buttonEl = screen.getByText(/Quote No Jutsu/i);
    const imgEl = screen.getByAltText(/imagem do personagem naruto/i);

    expect(buttonEl).toBeInTheDocument();
    expect(imgEl).toBeInTheDocument();
  });

  it('Should call the api when render for the first time', async () => {
    render(<App />);

    server.use(
      rest.get('http://127.0.0.1:5000/', (req, res, ctx) => {
        return res(ctx.json(response));
      }),
    );

    const quoteEl = await screen.findByText(/Testing Speaker/i);

    expect(quoteEl).toBeInTheDocument();
  });

  it('Should call a api when button were clicked', async () => {
    const customResponse = {
      speaker: 'custom test speaker',
      quote: 'teste quote',
    };

    render(<App />);

    server.use(
      rest.get('http://127.0.0.1:5000/', (req, res, ctx) => {
        return res(ctx.json(customResponse));
      }),
    );

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);
    const quoteEl = await screen.findByText(/custom test speaker/i);

    expect(quoteEl).toBeInTheDocument();
  });
});
