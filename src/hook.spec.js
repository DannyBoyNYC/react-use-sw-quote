import { renderHook, act } from '@testing-library/react-hooks';
import { useStarWarsQuote } from './';

describe('useStarWarsQuote', () => {
  test('should return an object with the keys: loading, quote', () => {
    const { result } = renderHook(() => useStarWarsQuote());
    // console.log(result, 'here is the result')
    // should have key for quote
    // should have key for loading
    const keys = Object.keys(result);
    expect(keys).toHaveLength(2);
    expect(result.current).toHaveProperty('loading');
    expect(result.current).toHaveProperty('quote');
  });

  test('should set loading to true after initial call', () => {
    const { result } = renderHook(() => useStarWarsQuote());
    expect(result.current.loading).toBe(true);
  });

  test('should return a quote and set loading to false', async () => {
    const { result } = renderHook(() => useStarWarsQuote());
    const { loading, quote } = result.current;
    expect(loading).toBe(true);
    expect(typeof result.current.quote).toBe('string');
    console.log(quote, 'what is the quote');
    // expect(quote)
    // add tests here
  });
});
