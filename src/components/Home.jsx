import React from 'react'
import './Home.css'
import Header from "./Header.jsx"
import Product from './Product.jsx'
const Home = () => {
  return (
    <div className='home_container'>
      <Header/>
      <div className="home_body">
        <img className='home_body_image' src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg" alt="" />
       <div className="home_body_firstrow">
          <Product 
          id='12344455'
          title='Cracking the Coding Interview: 189 Programming 6th Edition'
          price='24.94'
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg'/>
          <Product 
          id='12344478'
          title='Apple iPhone 12 Pro Max, 256GB, Pacific Blue'
          price='965.67'
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71FuI8YvCNL.__AC_SX300_SY300_QL70_FMwebp_.jpg' />
       </div>
       <div className="home_body_secondrow">
          <Product 
          id='12344498'
          title='Smart Watch for Men Women Fitness: 1.69 Touch Screen.'
          price='24.94'
          rating={5}
          image='https://m.media-amazon.com/images/I/61fAquVlzeL._AC_UY218_.jpg'/>
          <Product 
          id='12344123'
          title='NEHEME NH525 Foldable Drones with 1080P HD Camera for Adults'
          price='49.99'
          rating={5}
          image='https://m.media-amazon.com/images/I/61fAquVlzeL._AC_UY218_.jpg'/>
          <Product 
          id='12344456'
          title='Cracking the Coding Interview: 189 Programming Questions.'
          price='24.94'
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71FuI8YvCNL.__AC_SX300_SY300_QL70_FMwebp_.jpg'/>
       </div>

       <div className="home_body_thirdrow">
          <Product 
          id='12344455'
          title='Cracking the Coding Interview: 189 Programming 6th Edition'
          price='24.94'
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg'/>
       </div>
      </div>
      <div>
        <p style={{textAlign:'center',fontSize:'20px'}}>More ...</p>
        <div className='footer'>
        <ul className='footer-ul'>
          <li>Our Services</li>
          <li>Refund Policy</li>
          <li>Affiliate Program</li>
          <li>Customer service</li>
          <li>Refund Policy</li>
          <li>More products</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Home