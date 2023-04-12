import React from 'react'
import './Header.css'
import { FaSearch ,FaCartPlus} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Header = () => {

const [{basket}] = useStateValue();

console.log(basket)

  return (
    <div className='header_container'>
      <header className="header">
        <div className="header_logo">
          <Link to='/'>
          <img src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="szhjkhds" />
          </Link>
        </div>
        <div className="header_search">
          <input className='header_search_input' type="text" placeholder='Search' />
          <FaSearch className='header_search_icon'/>
        </div>
        <Link to='/Login' className='header_links'>
          <div className="header_options">
            <span>Hello</span>
            <span>Sign In</span>
          </div>
        </Link>
        <Link to='/' className='header_links'>
          <div className="header_options">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header_links'>
          <div className="header_options">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        <Link to='/Checkout' className='header_links'>
          <div className="header_options_cart">
            <FaCartPlus/>
            <span>{basket?.length}</span>
          </div>
        </Link>
      </header>
    </div>
  )
}

export default Header