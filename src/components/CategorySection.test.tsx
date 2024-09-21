import { render } from '@testing-library/react';
import { CategorySection } from './CategorySection';

jest.mock('../hooks/useFetchGifs', () => {
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

describe('CategorySection', () => {
  const category = 'example';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders content', () => {
    const component = render(<CategorySection category={category} key={category} />)

    expect(component.container.querySelector('h3')).toBeDefined();
    expect(component.container.querySelector('img')).toBeDefined();
    expect(component.container.querySelector('p')).toBeDefined();
  });

  it('render the correct content', () => {
    const component = render(<CategorySection category={category} key={category} />)

    expect(component.getByText('gift test title')).toBeDefined();
    expect(component.getByAltText('category image')).toBeDefined();
    expect(component.getByText('gift test title')).toBeDefined();
  });
});
