import { render } from '@testing-library/react';
import { GifSerch } from './GifSerch'
import { fireEvent } from '@testing-library/dom';

jest.mock('./hooks/useFetchGifs', () => {
  return {
    useFetchGifs:
      jest.fn().mockReturnValue({
        gifs:
          [{
            id: 1,
            title: 'gift test title',
            url: 'https://www.example_url.com'
          }]
      })
  };
});

describe('GifSearch', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render content', () => {
    const component = render(<GifSerch />)

    expect(component.container.querySelector('h1')).toBeDefined();
    expect(component.container.querySelector('form')).toBeDefined();
    expect(component.container.querySelector('input')).toBeDefined();
    expect(component.container.querySelector('button')).toBeDefined();
  });

  it('render the correct content', () => {
    const component = render(<GifSerch />)

    expect(component.getByText('Gif Search')).toBeDefined();
    expect(component.getByPlaceholderText('write someting')).toBeDefined();
    expect(component.getByText('Search')).toBeDefined();
  });

  it('search gift category', () => {
    const component = render(<GifSerch />)

    const input = component.container.querySelector('input');
    fireEvent.change(input!, { target: { value: 'hi, this is a test' } });

    const searchButton = component.container.querySelector('button');
    fireEvent.click(searchButton!);

    expect(component.getByText('gift test title')).toBeDefined();
    expect(component.getByAltText('category image')).toBeDefined();
    expect(component.getByText('gift test title')).toBeDefined();
  })
});
