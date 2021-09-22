import * as React from 'react'
import { Link } from 'react-router-dom'

import { ServerResponseProduct } from 'api/products/products.types'
import { Button } from 'app/components/form/button'
import { icons } from 'app/components/icons'
import { range } from 'utils/range/range'

import './ProductCard.css'

interface IProductCard {
  cardData: ServerResponseProduct
  displayType?: 'list' | 'popup-display'
}

const RATING_NUMBER = 5

export const ProductCard: React.FC<IProductCard> = ({ cardData, displayType = 'list' }) => {
  return (
    <div data-testid='ProductCard' className={`ProductCard ${displayType === 'list' ? 'ProductCard__list' : 'ProductCard__single'}`}>
      {cardData.promo ? (
        <div className='ProductCard_promo-code'>
          Promo
        </div>
      ) : null}
      <img className={`ProductCard_image ${displayType === 'list' ? 'ProductCard_image__list' : 'ProductCard_image__single'}`} src={cardData.image} />
      <div className={displayType === 'list' ? 'ProductCard_content' : 'ProductCard_content__single'}>
        <div className={displayType === 'list' ? 'ProductCard_header' : 'ProductCard_header__single'}>
          {cardData.name}
        </div>
        <div className={displayType === 'list' ? 'ProductCard_description' : 'ProductCard_description__single'}>
          {cardData.description}
        </div>
        {displayType === 'list' ? (
          <>
            <div className='ProductCard_rating' data-testid='RatingStars'>
              {range(1, RATING_NUMBER).map(num => (
                <React.Fragment key={num}>
                  {num > cardData.rating ? (
                    <span data-testid='StarNotfilled'>
                      <icons.StarBorderIcon color='var(--hard-grey-100)' />
                    </span>
                  ) : (
                    <span data-testid='StarFilled'>
                      <icons.StarFilledIcon color='var(--orange)' />
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className='ProductCard_details-button'>
              <Link to={`/products/${cardData.id}`}>
                <Button disabled={!cardData.active} >
                  {cardData.active ? 'Show details' : 'Unavailable'}
                </Button>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
} 