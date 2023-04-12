import React from 'react'
import { useStateValue } from '../StateProvider'
import Header from './Header'
import'./Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import {FaShoppingBasket} from 'react-icons/fa'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{basket}] = useStateValue()


  return (
    <div className='checkout'>
      <Header/>
      <div className="checkout_container">
      <div className="checkout_content">
        <img className='checkout_ad' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
       <div className="checkout_logic">
       {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is Empty</h2>
            <p>You have no items in your basket. To buy one or more items, click the  "Add to Cart" next to the item </p>
          </div>
        ) : (
          <div className='checkout_title'>
            <h2>Your Shopping Basket <FaShoppingBasket /></h2>
            {/* list out all of the checkout product */}
            {
              basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            }
          </div>
        )}
       </div>
      </div>
      {
        basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal/>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Checkout