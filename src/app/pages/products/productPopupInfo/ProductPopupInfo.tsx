import * as React from 'react'

import { ServerResponseProduct } from 'api/products/products.types'
import { Link, useParams, Redirect } from 'react-router-dom';
import { ProductCard } from '../productsList/productCard';
import { icons } from 'app/components/icons';

import './ProductPopupInfo.css'


interface IProductPopupInfo {
  products: ServerResponseProduct[]
}

export const ProductPopupInfo: React.FC<IProductPopupInfo> = ({ products }) => {
  const { productId } = useParams<{ productId: string }>()

  const product = React.useMemo(() => (products.find(product => product.id === Number(productId))), [productId, products])

  if (!product) {
    return <Redirect to='/' />
  }

  return (
    <div className='ProductPopupInfo' data-testid='ProductPopupInfo'>
      <div className='ProductPopupInfo_card-container'>
        <div className='ProductPopupInfo_close-icon'> 
          <Link to='/' data-testid='ProductPopupInfoCloseIcon'>
            <icons.CloseIcon width={24} height={24} />
          </Link>
        </div>
        <ProductCard 
          displayType='popup-display'
          cardData={product}
        />
      </div>
    </div>
  )
} 