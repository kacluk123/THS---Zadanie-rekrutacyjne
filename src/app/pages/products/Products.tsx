import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'app/components/form/button';
import { AppRoute } from 'routing/AppRoute.enum';
import Input from 'app/components/form/input';
import { icons } from 'app/components/icons';
import Checkbox from 'app/components/form/checkbox';
import ProductsTopBar from './productsTopBar';

export const Products = () => {
  return (
    <>
      <ProductsTopBar />
    </>
  );
};
