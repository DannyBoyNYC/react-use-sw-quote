import * as React from 'react';

export function useStarWarsQuote(initialValue) {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    async function getStarWarsQuote() {
      setLoading(true);
      const response = await fetch(
        'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
      );
      const data = await response.json();
      const quote = data.starWarsQuote;
      setQuote(quote);
      setLoading(false);
    }
    getStarWarsQuote();
  }, [setQuote]);

  return { quote, loading };
}
