import React from 'react';
import './Header.css';
import companyLogo from "./assets/images/amazon_lit.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
  return (
    <div className='header'>
<img className='header_logo' src={ companyLogo } alt="" />

<div className='header_search'>
    <input type="text" className='header_searchInput' name="" value="" />
    <SearchIcon className='header_searchIcon'/>
</div>

<div className='header_nav'>
    <div className='header_option'>

        <span className='header_optionLineOne'> Hello Guest </span>
        <span className='header_optionLineTwo'> Sign In </span>

    </div>
    <div className='header_option'>

    <span className='header_optionLineOne'> Returns  </span>
    <span className='header_optionLineTwo'> & Orders </span>

    </div>
    <div className='header_option'>
        
    <span className='header_optionLineOne'> Your  </span>
    <span className='header_optionLineTwo'> Prime </span>
    </div>

    <div className='header_optionBasket'>
<ShoppingBasketIcon/>
<span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
    

</div>

</div>

  )
}

export default Header