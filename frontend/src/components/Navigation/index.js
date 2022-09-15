import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/logos/gymshark_logo.png'


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

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
  const openSidebar= () => {
    let modal = document.getElementById("cart-index")
    let modalBackground = document.getElementById("cart-modal-background")
    modal.style.display = "block"
    modalBackground.style.display = "block"
  }

  return (
    <div className='navBar'>
      <div className='navTop'>
          <button>
            <i class="fa-regular fa-user"></i>
            {" "}My Account
          </button>
          <button>Blog</button>
          <button>Newsletter</button>
          <button>Help</button>
          <button>Location</button>
      </div>

      <div className='navBottom'>
        <div className='navLeft'>
          <NavLink exact to="/">
            <img id="logo" src={logo} alt='logo'></img>
          </NavLink>
        </div>
        {/* <div className='navCenter'>
          <button>Women's</button>
          <button>Men's</button>
          <button>Accessories</button>
        </div> */}
        <div className='navCenter'>
          <NavLink exact to="/products">Shop Now!</NavLink>
        </div>
        <div className='navRight'>
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          {sessionLinks}
          <button 
          // onClick={openSidebar}
          >
            <NavLink exact to="/cartIndex"><i class="fa-solid fa-bag-shopping"></i></NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
