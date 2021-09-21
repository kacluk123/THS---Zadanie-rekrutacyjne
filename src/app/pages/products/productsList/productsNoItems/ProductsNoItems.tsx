import * as React from 'react'

import { EmptyIcon } from 'app/components/icons/Empty'

import './ProductsNoItems.css'

export const ProductsNoItems: React.FC = () => {
  return (
    <div className='ProductsNoItems'>
      <EmptyIcon 
        viewBox="0 0 38 48"
        height={48}
        width={38}
        color='var(--hard-grey-100)'
      />
      <div className='ProductsNoItems_header'>
        Ooops… It’s empty here
      </div>
      <div className='ProductsNoItems_description'>
        There are no products on the list
      </div>
    </div>
  )
} 
