import React, { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/logos/gymshark_logo.png'
import CartSlideOut from '../CartSlideOut';


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser}>
          <i class="fa-regular fa-user"></i>
      </ProfileButton>
    );
  } else {
    sessionLinks = (
      <>
          <button>
            <NavLink exact to="/login">
              <i class="fa-regular fa-user"></i>
            </NavLink>
          </button>
      </>
    );
  }

  const [showCart, setShowCart] = useState(false)

  return (
    <div className='navBarContainer'>
      <div className='navBar'>
        <div className='navLeft'>
          <NavLink exact to="/">
            <img id="logo" src={logo} alt='logo'></img>
          </NavLink>
        </div>
        <div className='navCenter'>
          <NavLink id='shop-now' exact to="/products">Shop Now!</NavLink>
          <NavLink id='shop-now' exact to="/products/mens">Shop Mens</NavLink>
          <NavLink id='shop-now' exact to="/products/womens">Shop Womens</NavLink>
          <NavLink id='shop-now' exact to="/products/accessories">Shop Accessories</NavLink>
        </div>
        <div className='navRight'>
          <button>
            <i id='magnifying-glass' class="fa-solid fa-magnifying-glass" onClick={()=>history.push("/search")}></i>
          </button>
          {sessionLinks}
          <button 
          // onClick={openSidebar}
          >
            <button id='shopping-bag' exact to="/"><i class="fa-solid fa-bag-shopping" onClick={()=>setShowCart(true)}></i></button>
          </button>
        </div>
      </div>
      {showCart && <CartSlideOut setShowCart={setShowCart}/>}
    </div>
  );
}

export default Navigation;
