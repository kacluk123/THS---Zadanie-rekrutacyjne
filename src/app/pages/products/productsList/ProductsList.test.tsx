import React from 'react';

import { render, screen } from 'tests';
import { products } from 'tests/mocks/products';
import { ProductsList } from './ProductsList'


describe('Products-list', () => {
  test('Check if list displays correct cards number', async () => {
    const { queryAllByTestId, queryByTestId, queryByText } = render(<ProductsList isLoading={false} products={products.items} />);

    expect(queryAllByTestId('ProductCard').length).toBe(products.items.length)
    expect(queryByTestId('Spinner')).not.toBeInTheDocument()
    expect(queryByText('There are no products on the list')).not.toBeInTheDocument()
  });

  test('Check if loading spinner shows up', async () => {
    const { queryByTestId, queryAllByTestId } = render(<ProductsList isLoading={true} products={products.items} />);

    expect(queryAllByTestId('ProductCard').length).toBe(0)
    expect(queryByTestId('Spinner')).toBeInTheDocument()
  });

  test('Check if fallback shows up when no cards', async () => {
    const { queryByTestId, queryByText } = render(<ProductsList isLoading={false} products={[]} />);

    expect(queryByText('There are no products on the list')).toBeInTheDocument()
  });
});
