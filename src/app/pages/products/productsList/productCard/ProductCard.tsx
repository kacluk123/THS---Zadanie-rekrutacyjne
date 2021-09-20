import { ServerResponseProduct } from 'api/products/products.types'
import Button from 'app/components/form/button'
import { icons } from 'app/components/icons'
import * as React from 'react'
import { range } from 'utils/range/range'
import './ProductCard.css'

interface IProductCard {
  cardData: ServerResponseProduct
}

const RATING_NUMBER = 5

export const ProductCard: React.FC<IProductCard> = ({ cardData }) => {
  return (
    <div className='ProductCard'>
      {cardData.promo ? (
        <div className='ProductCard_promo-code'>
          Promo
        </div>
      ) : null}
      <img className='ProductCard_image' src={cardData.image} />
      <div className='ProductCard_content'>
        <div className='ProductCard_header'>
          {cardData.name}
        </div>
        <div className='ProductCard_description'>
          {cardData.description}
        </div>
        <div className='ProductCard_rating'>
          {range(1, RATING_NUMBER).map(num => (
            num > cardData.rating ? <icons.StarBorderIcon color='var(--hard-grey-100)' /> : <icons.StarFilledIcon color='var(--orange)' />
          ))}
        </div>
        <div className='ProductCard_details-button'>
          <Button disabled={!cardData.active} >
            {cardData.active ? 'Show details' : 'Unavailable'}
          </Button>
        </div>
      </div>
    </div>
  )
} 