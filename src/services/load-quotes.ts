export const loadQuotes = async (): Promise<{ quote: string; speaker: string }> => {
  const config: string | undefined = process.env.REACT_APP_API;

  return config && fetch(config).then((res) => res.json());
};
