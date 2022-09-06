import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/gymshark_logo.png'


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
            <NavLink to="/login">
              <i class="fa-regular fa-user"></i>
            </NavLink>
            {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div className='navBar'>
      <div className='navLeft'>
        <NavLink exact to="/">
          <img id="logo" src={logo} alt='logo'></img>
        </NavLink>
      </div>
      <div className='navCenter'>
        <button>Women's</button>
        <button>Men's</button>
        <button>Accessories</button>
      </div>

      <div className='navRight'>
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        {sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
