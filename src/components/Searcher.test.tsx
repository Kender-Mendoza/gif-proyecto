import React from 'react';
import { render } from '@testing-library/react';
import { Searcher } from './Searcher';
import { fireEvent } from '@testing-library/dom';

describe('Searcher Component', () => {
  const mockOnAddCategory = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders content', () => {
    const component = render(<Searcher onAddCategory={mockOnAddCategory} />);

    expect(component.container.querySelector('form')).toBeDefined();
    expect(component.container.querySelector('input')).toBeDefined();
    expect(component.container.querySelector('button')).toBeDefined();
  });

  it('render the correct content', () => {
    const component = render(<Searcher onAddCategory={mockOnAddCategory} />);

    expect(component.getByPlaceholderText('write someting')).toBeDefined();
    expect(component.getByText('Search')).toBeDefined();
  });

  it('fired onAddCategory when click search button', () => {
    const component = render(<Searcher onAddCategory={mockOnAddCategory} />);

    const input = component.container.querySelector('input');
    fireEvent.change(input!, { target: { value: 'hi, this is a test' } });

    const searchButton = component.container.querySelector('button');
    fireEvent.click(searchButton!);

    expect(mockOnAddCategory).toHaveBeenCalledWith('hi, this is a test');
  });
});
