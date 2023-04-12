import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'

const Product = ({id,title,price,rating,image}) => {

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
            //Add item to basket
            dispatch({
                type:'ADD_TO_BASKET',
                item:{
                        id:id,
                        title:title,
                        image:image,
                        rating:rating, 
                        price:price,
                },
            })
    }

  return (
        <div className="product" >
            <div className="product_content" >
            <p>{title}</p>
            <p><span>$</span>{price}</p>
            <div className="product_rating">
                {
                    Array(rating).fill().map((_) => 
                    (<p>⭐</p>))
                }
            </div>
            </div>
            <img className='product_image' src={image} alt="snhhjsh" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
  )
}

export default Product