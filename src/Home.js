
import React from 'react';
import './Home.css';
import Product from './Product';
import amazonBaby from './assets/images/amazon_baby.jpg'
import fitness from './assets/images/fitness.jpg'
import laptablets from './assets/images/laptop_and_tablets.jpg'
import tools from './assets/images/tools.jpg'
import h_and_care from './assets/images/health_and_care.jpg'
import watch from './assets/images/watch.jpg'
import iphone from './assets/images/iphone.jpg'

function Home() {
  return (
    <div className='home'>
        
    <div className='home_container'>
        <img className="home_image" src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg" alt="" />

        
    <div className='home_row'>

        <Product  title="Toys and Gifts" price={320000} image={amazonBaby} rating={5} />
        <Product title="Fitness" price={450000} image={fitness}  rating={3}/>
        <Product  title="iPhone 13 Pro Max, 128GB, Graphite - Unlocked (Renewed Premium)" price={820000} image={iphone}  rating={5}/>
        <Product  title="Health And Care" price={1200000} image={h_and_care} rating={4} />
       

    </div>

    <div className='home_row'>
    <Product  title="Tools" price={1500000} image={tools} />
    <Product  title="Garmin 010-02174-01 Vivoactive 4, GPS Smartwatch, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensors and More, Silver with Gray Band" price={820000} image={watch}  rating={5}/>
        <Product  title="Health And Care" price={1200000} image={h_and_care} rating={4} />       
     </div>


    <div className='home_row'>
    <Product title="Smart Watch, Fitness Tracker Smartwatch (Answer/Make Call), Heart Rate Monitor, Activity Tracker for Android and iOS Phones with Sleep Tracking, 28 Sport Modes, Blood Oxygen, Fitness Watch for Women" price={450000} image={watch}  rating={3}/>
    <Product title="Fitness" price={450000} image={fitness}  rating={3}/>
    </div>

    </div>
    </div>
  )
}

export default Home