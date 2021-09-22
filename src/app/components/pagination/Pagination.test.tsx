import React from 'react';

import { queryByTestId, render, screen } from 'tests';
import { products } from 'tests/mocks/products';
import { Pagination } from '.';

const eventCallbacks = {
  handlePageChange: (page: number) => {},
  handleFirst: () => {},
  handleLast: () => {}
}


describe('Pagination', () => {
  test('If no pagination when only one page', async () => {
    const { queryByTestId } = render(<Pagination  {...eventCallbacks} currentPage={1} pages={1} />);

    expect(queryByTestId('Pagination')).not.toBeInTheDocument()
  });

  test('If render all page numbers', async () => {
    const { queryAllByTestId, queryByText } = render(<Pagination  {...eventCallbacks} currentPage={1} pages={6} />);

    expect(queryAllByTestId('PaginationNumber').length).toBe(6)
    expect(queryByText('...')).not.toBeInTheDocument()
  });

  test('If pagination is in middle', async () => {
    const { queryByText, queryAllByTestId } = render(<Pagination  {...eventCallbacks} currentPage={5} pages={10} />);

    expect(queryAllByTestId('PaginationNumber').length).toBe(6)
    expect(queryByText("4")).toBeInTheDocument()
    expect(queryByText("5")).toBeInTheDocument()
    expect(queryByText("6")).toBeInTheDocument()
    expect(queryByText('...')).toBeInTheDocument()
    expect(queryByText("8")).toBeInTheDocument()
    expect(queryByText("9")).toBeInTheDocument()
    expect(queryByText("10")).toBeInTheDocument()
  });
});