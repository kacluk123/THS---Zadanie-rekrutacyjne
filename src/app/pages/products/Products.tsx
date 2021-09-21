import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';

import { ProductsTopBar } from './productsTopBar';
import { useProducts } from 'hooks/useProducts/useProducts';
import { ProductsList } from './productsList';
import { ProductsPagination } from './productsPagination';
import { ProductPopupInfo } from './productPopupInfo';

import './Products.css'

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
      <Switch>
        <Route path={`/products/:productId`}>
          {products ? <ProductPopupInfo products={products.items} /> : null}
        </Route>
        <Redirect to={AppRoute.home} />
      </Switch>
    </div>
  );
};
