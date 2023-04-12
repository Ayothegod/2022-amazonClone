import React from 'react'
// import { FaBasketballBall } from 'react-icons/fa';
import NumberFormat from 'react-number-format';
import { useStateValue } from '../StateProvider';
import './Subtotal.css'
import { getBasketTotal } from '../Reducer';

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue()


  return (
    <div className='subtotal'> 
       <NumberFormat
        renderText={(value) => (
            <>
              <p>
                  Subtotal ({basket.length} items) : <strong>({ value})</strong>
              </p>
              <small className='subtotal_gift'>
                  <input type="checkbox" /> This order contains a gift
              </small>
            </>
        )
        }
        // <div> {value} </div>
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
       <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

