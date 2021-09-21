import React from 'react';

import { render, waitFor } from 'tests';
import { products } from 'tests/mocks/products';
import { Products } from './Products';
import { api } from '../../../api'

const addMock = jest.mock('../../../api', () => ({
  products: {
    getProducts: () => Promise.resolve(products)
  }
}))



describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<Products />);

    await waitFor(() => { 
      expect(getByText('Unbranded Frozen Cheese')).toBeInTheDocument();
    })
  });
});
