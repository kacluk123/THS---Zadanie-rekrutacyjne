import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'app/components/form/button';
import { AppRoute } from 'routing/AppRoute.enum';
import Input from 'app/components/form/input';
import { icons } from 'app/components/icons';
import Checkbox from 'app/components/form/checkbox';
import ProductsTopBar from './productsTopBar';
import { useProducts } from 'hooks/useProducts/useProducts';
import { ProductsList } from './productsList';
import './Products.css'
import { Pagination } from 'app/components/pagination';
import { ProductsPagination } from './productsPagination';

export const Products = () => {
  const { products, requestStatus, manipulateQuery, query } = useProducts()
  return (
    <div className='Products'>
      <ProductsTopBar 
        manipulateQuery={manipulateQuery}
        query={query}
      />
      <div className='Products_bottom'> 
        <ProductsList 
          products={products?.items} 
          isLoading={requestStatus === 'pending'}
        />
        {products ? (
          <ProductsPagination 
            currentPage={products.meta.currentPage} 
            pages={products.meta.totalPages} 
            manipulateQuery={manipulateQuery}
            query={query}
          />
        ) : null}
      </div>
    </div>
  );
};
