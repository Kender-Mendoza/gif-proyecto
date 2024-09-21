import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from './useFetchGifs';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    {
      data: [
        {
          id: 'abc123',
          title: 'Test Gif',
          images: {
            fixed_height: {
              url: 'https://media.giphy.com/media/test-url/gif.gif'
            }
          }
        }
      ]
    }
  )
})) as jest.Mock;

test('should fetch and return gifs based on the category', async () => {
  const { result } = renderHook(() => useFetchGifs('cats'));

  await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
  expect(result.current.gifs).toEqual([
    {
      id: 'abc123',
      title: 'Test Gif',
      url: 'https://media.giphy.com/media/test-url/gif.gif'
    },
  ]);
  expect(fetch).toHaveBeenCalledWith(
    'https://api.giphy.com/v1/gifs/search?api_key=w4B74Ot0KSvUcT0TJWLz4jVl7Ml04NiY&q=cats&limit=5'
  );
});
