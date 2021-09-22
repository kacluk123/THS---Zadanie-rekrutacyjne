import * as React from 'react'

import { ProductsQuery } from 'api/products/products.types'
import { Button } from 'app/components/form/button'
import { Checkbox } from 'app/components/form/checkbox'
import { Input } from 'app/components/form/input'
import { icons } from 'app/components/icons'

import './ProductsTopBar.css'

interface IProductsTopBar {
  manipulateQuery: (query: ProductsQuery) => void
  query: ProductsQuery
}

type productsFiltersCheckboxes = 'active' | 'promo'

function isValidCheckboxQueryName(value: string): value is productsFiltersCheckboxes {
  return ['active', 'promo'].includes(value)
}

const removePropFromObject = <T extends Object>(obj: T, propToDelete: string) => {
  return Object.fromEntries<T>(
    Object.entries({...obj}).filter(([key, value]) => key !== propToDelete)
  )
}

export const ProductsTopBar: React.FC<IProductsTopBar> = ({ query, manipulateQuery }) => {
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    manipulateQuery({
      ...query,
      page: 1,
      search: e.currentTarget.value
    })
  }

  const handleChangeCheckboxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name 
    if (isValidCheckboxQueryName(name)) {
      if (query[name]) {
        const newQuery = removePropFromObject(query, name)
        manipulateQuery({
          ...newQuery,
          page: 1,
        })
      } else {
        manipulateQuery({
          ...query,
          [name]: true,
          page: 1,
        })
      }
    }
  }

  return (
    <div className='ProductsTopBar'>
      <div className='ProductsTopBar_search-input'>
        <Input 
          inputIcon={<icons.SearchIcon />} 
          value={query.search} 
          onChange={handleChangeSearch} 
          name='products-search'
          data-testid='products-search-input'
        />
      </div>
      <h1 className='ProductsTopBar_logo'>
        join.tsh.io
      </h1>
      <div className='ProductsTopBar_login-button'>
        <Button theme='secondary' >
          Login
        </Button>
      </div>
      <div className='ProductsTopBar_checkboxes '>
        <Checkbox 
          title='Active' 
          name='active' 
          onChange={handleChangeCheckboxes} 
          checked={Boolean(query.active)} 
        />
        <Checkbox 
          title='Promo' 
          name='promo' 
          data-testid='promo'
          onChange={handleChangeCheckboxes} 
          checked={Boolean(query.promo)} 
        />
      </div>
    </div>
  )
} 