import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'app/components/form/button';
import { AppRoute } from 'routing/AppRoute.enum';
import Input from 'app/components/form/input';
import { icons } from 'app/components/icons';
import Checkbox from 'app/components/form/checkbox';


export const Products = () => {
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
      <Button>
        test
      </Button>
      <Input title='test'/>
      <Checkbox checked  title='Test'/>
    </>
  );
};
