
import React from 'react';
import './Home.css';
import Product from './Product';
import amazonBaby from './assets/images/amazon_baby.jpg'
import fitness from './assets/images/fitness.jpg'
import laptablets from './assets/images/laptop_and_tablets.jpg'
import tools from './assets/images/tools.jpg'
import h_and_care from './assets/images/health_and_care.jpg'

function Home() {
  return (
    <div className='home'>
        
    <div className='home_container'>
        <img className="home_image" src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg" alt="" />

        
    <div className='home_row'>

        <Product  title="Toys and Gifts" price={320000} image={amazonBaby} />
        <Product title="Fitness" price={450000} image={fitness} />
        <Product  title="Laptop & Tablets" price={820000} image={laptablets} />
        <Product  title="Health And Care" price={1200000} image={h_and_care} />
       

    </div>

    <div className='home_row'>
    <Product  title="Tools" price={1500000} image={tools} />
        <Product/>
        <Product/>        
     </div>


    <div className='home_row'>
    <Product/>
        <Product/> 
        
    </div>

    </div>
    </div>
  )
}

export default Home