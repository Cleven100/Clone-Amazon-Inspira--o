import React from 'react';
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">

<div className="header__logo">
        <StoreFrontIcon className="header__logoImage" fontSize="large"/>
        <h2 className="header__logoTitle">cloneShop</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <spam className="nav__itemLineOne">Hello</spam>
          <span className="nav__itemLineTwo">Sign in</span>
        </div>
        <div className="nav__item">
          <spam className="nav__itemLineOne">Your</spam>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon 
          className="itemBasket"
          fontSize="large"/>
          <span className="nav__itemLineTwo nav__basktCount">0</span>
        </div>
      </div>

    </div>
  )
}

export default Header
