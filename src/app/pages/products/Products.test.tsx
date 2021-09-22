import React from 'react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { fireEvent, render, screen, waitFor, waitForElement, waitForElementToBeRemoved } from 'tests';

import { products } from 'tests/mocks/products';
import { Products } from './Products';

const server = setupServer(
  rest.get('https://join-tsh-api-staging.herokuapp.com/products', async (req, res, ctx) => {
    return res(ctx.json(products))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Products', () => {
  test('If product popup shows up and close up', async () => {
    const { getAllByText, getByTestId, getAllByTestId, queryByTestId } = render(<Products />);

    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })

    const [ firstProduct ] = getAllByText('Show details')

    fireEvent.click(firstProduct)

    expect(getByTestId('ProductPopupInfo')).toBeInTheDocument()

    const close = getByTestId('ProductPopupInfoCloseIcon')

    fireEvent.click(close)

    expect(queryByTestId('ProductPopupInfo')).not.toBeInTheDocument()
  });

  test('Reaction on active filter change', async () => {
    const { getByText, queryByTestId, getAllByTestId } = render(<Products />);

    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })

    const activeCheckbox = getByText('Active')

    fireEvent.click(activeCheckbox)

    expect(queryByTestId('Spinner')).toBeInTheDocument()

    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })
  });

  test('Reaction on promo filter change', async () => {
    const { queryByTestId, getAllByTestId, getByTestId } = render(<Products />);

    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })

    const promoCheckbox = getByTestId('promo')

    fireEvent.click(promoCheckbox)

    expect(queryByTestId('Spinner')).toBeInTheDocument()

    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })
  });

  test('Reaction on search', async () => {
    const { getAllByTestId, getByTestId } = render(<Products />);

    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })

    const searchInput = getByTestId('products-search-input')

    fireEvent.change(searchInput, {
      target: {
        value: 'test product'
      }
    })


    await waitFor(() => {
      expect(getByTestId('Spinner')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })
  });

  test('If pagination change', async () => {
    const { getByTestId, getAllByTestId, getByText } = render(<Products />);

    await waitFor(() => {
      expect(getByText('Last'))
    })

    const lastPagination = getByText('Last')

    fireEvent.click(lastPagination)

    expect(getByTestId('Spinner')).toBeInTheDocument()
    
    await waitFor(() => {
      expect(getAllByTestId('ProductCard').length).toBe(6)
    })
  });
});
