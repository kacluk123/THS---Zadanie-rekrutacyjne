import React from 'react';

import { render, screen } from 'tests';
import { products } from 'tests/mocks/products';
import { ProductCard } from './ProductCard';

const productWithPromo = products.items[0]
const inactiveProduct = products.items[1]

describe('Products-list', () => {
  test('Promo shows up', async () => {
    const { queryByText } = render(<ProductCard cardData={productWithPromo} />);
    expect(queryByText('Promo')).toBeInTheDocument()
  });

  test('Details button is disabled', async () => {
    const { getByText } = render(<ProductCard cardData={inactiveProduct} />);
    const button = getByText('Unavailable')
    expect(button).toBeDisabled()
  });

  test('Card rating', async () => {
    const { getAllByTestId } = render(<ProductCard cardData={productWithPromo} />);
    const filledStars = getAllByTestId('StarFilled')
    const notFilledStars = getAllByTestId('StarNotfilled')
    expect(filledStars.length).toBe(2)
    expect(notFilledStars.length).toBe(3)
  });

  test('Details button is disabled', async () => {
    const { getByText } = render(<ProductCard cardData={inactiveProduct} />);
    const button = getByText('Unavailable')
    expect(button).toBeDisabled()
  });
  
  test('Popup display mode', async () => {
    const { queryByText, queryByTestId } = render(<ProductCard cardData={inactiveProduct} displayType='popup-display' />)
    expect(queryByText('Unavailable')).not.toBeInTheDocument()
    expect(queryByTestId('RatingStars')).not.toBeInTheDocument()
  });
});
