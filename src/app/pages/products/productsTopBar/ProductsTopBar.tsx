import Button from 'app/components/form/button'
import Checkbox from 'app/components/form/checkbox'
import Input from 'app/components/form/input'
import { icons } from 'app/components/icons'
import * as React from 'react'
import './ProductsTopBar.css'

interface IProductsTopBar {}

const ProductsTopBar: React.FC<IProductsTopBar> = () => {
  return (
    <div className='ProductsTopBar'>
      <div className='ProductsTopBar_search-input'>
        <Input inputIcon={<icons.SearchIcon />} />
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
        <Checkbox title='Active' />
        <Checkbox title='Promo' />
      </div>
    </div>
  )
} 

export default ProductsTopBar