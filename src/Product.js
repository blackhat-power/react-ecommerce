import React from 'react'

import './Product.css'

function Product({ title, image, price, rating }) {
  return (

    <div className='product'>

    <div className='product_info'>
        <p>{title}</p> 
    
    <p className='product_price'>
        <small>$</small>
        <strong>{price}</strong>
    </p>

{/* ctr + cmd + space */}

    <div className='product_rating'>
        <p> ⭐️ </p>
        {/* <p> ⭐️ </p> */}
        {/* <p> ⭐️ </p> */}
    </div>

    </div>

    <img src={image} alt=""/>

    <button type="">Add to Basket</button>

    </div>
  )
}

export default Product