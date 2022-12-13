import React from 'react'
import amazonBaby from './assets/images/amazon_baby.jpg'
import './Product.css'

function Product() {
  return (

    <div className='product'>

    <div className='product_info'>
        <p>Toys</p> 
    
    <p className='product_price'>
        <small>$</small>
        <strong>19.99</strong>
    </p>

{/* ctr + cmd + space */}

    <div className='product_rating'>
        <p> ⭐️ </p>
        {/* <p> ⭐️ </p> */}
        {/* <p> ⭐️ </p> */}
    </div>

    </div>

    <img src={amazonBaby} alt=""/>

    <button type="">Add to Basket</button>

    </div>
  )
}

export default Product