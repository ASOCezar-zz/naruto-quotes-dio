import { loadQuotes } from './load-quotes';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

describe('loadQuotes', () => {
  const response = { quote: 'Testing Quote', speaker: 'Testing Speaker' };
  const server = setupServer(
    rest.get('http://127.0.0.1:5000', (req, res, ctx) => {
      return res(ctx.json(response));
    }),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('Should transform a JSON into a object', async () => {
    const quote = await loadQuotes();

    expect(quote).toStrictEqual(response);
  });
});
