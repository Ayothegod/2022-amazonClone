import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'

const CheckoutProduct = ({id,title,image,rating,price}) => {
    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id:id,
        })

    }
  return (
    <div className='checkoutproduct'>
        <div className="checkoutproduct_content">
            <div className="checkoutproduct_content_image">
                <img src={image} alt='jhahj' />
            </div>
            <div className="checkoutproduct_content_info">
                <p className='checkoutproduct_content_info_title'>{title}</p>
                <p className='checkoutproduct_content_info_price'>${price}</p>
                <p className='checkoutproduct_content_info_rating'>
                    {
                        Array(rating).fill().map((_) => 
                        (<p>⭐</p>))
                    }
                </p>
                <button onClick={removeFromBasket}>Remove from cart</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct