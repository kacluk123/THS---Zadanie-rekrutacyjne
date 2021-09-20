import { ProductsQuery } from 'api/products/products.types';
import { Pagination } from 'app/components/pagination';
import * as React from 'react'
import './ProductsPagination.css'

interface IProductsPagination {
  currentPage: number;
  pages: number;
  manipulateQuery: (query: ProductsQuery) => void
  query: ProductsQuery;
}

export const ProductsPagination: React.FC<IProductsPagination> = ({ 
  currentPage,
  pages,
  manipulateQuery,
  query
}) => {
  
  const handlePageChange = (page: number) => {
    manipulateQuery({
      ...query,
      page
    })
  }

  const handleLastPage = () => {
    manipulateQuery({
      ...query,
      page: pages
    })
  }

  const handleFirstPage = () => {
    manipulateQuery({
      ...query,
      page: 1
    })
  }

  return (
    <div className='ProductsPagination'>
      <Pagination 
        currentPage={currentPage} 
        handleFirst={handleFirstPage}
        handleLast={handleLastPage}
        pages={pages} 
        handlePageChange={handlePageChange}
      />
    </div>
  )
}; 