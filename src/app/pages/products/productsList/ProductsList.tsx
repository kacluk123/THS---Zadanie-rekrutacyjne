import * as React from 'react'

import { ServerResponseProduct } from 'api/products/products.types'
import { ProductCard } from './productCard'
import { Spinner } from 'app/components/spinner'
import { ProductsNoItems } from './productsNoItems'

import './ProductsList.css'

interface IProductsList {
  products?: ServerResponseProduct[]
  isLoading: boolean
}

export const ProductsList: React.FC<IProductsList> = ({ products, isLoading }) => {
  if (products?.length === 0) {
    return (
      <div className='ProductsList__empty'>
        <ProductsNoItems />
      </div>
    )
  }
  
  return (
    <div className={isLoading ? 'ProductsList__with-spiner' : 'ProductsList'}>
      {isLoading ? <Spinner /> : products?.map((product) => <ProductCard key={product.id} cardData={product} />)}
    </div>
  )
} 
