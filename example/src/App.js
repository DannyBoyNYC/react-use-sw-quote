import React from 'react';
import { useStarWarsQuote } from '@devereld/react-use-sw-quote';

const App = () => {
  const { quote, loading } = useStarWarsQuote('');

  return <div>{quote}</div>;
};
export default App;
