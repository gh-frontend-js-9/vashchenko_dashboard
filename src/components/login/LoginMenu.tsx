import React from 'react';
import {NavLink} from 'react-router-dom';

// Images
import logo from '../../assets/images/icons/logo.png';

const LoginMenu = () => (
<div>
  <NavLink to={'/'}>
    <h2 className="inactive underlineHover"> Log In </h2>
  </NavLink>
  <NavLink to={'/reset'}>
    <h2 className="inactive underlineHover"> Reset </h2>
  </NavLink>
  <NavLink to={'/signup'}>
    <h2 className="inactive underlineHover"> Sign Up </h2>
  </NavLink>
  <div className='fadeIn first'>
    <NavLink to={'/'}>
      <img src={logo} alt='Welcome to Virtus Dashboard'/>
    </NavLink>
  </div>
</div>
);

export default LoginMenu;
