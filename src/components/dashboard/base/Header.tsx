import React from "react";
import {NavLink} from "react-router-dom";

// components
import {ModalWindow} from "./ModalWindow";
import AddNewProject from "../projects/AddNewProject";

// images
import logo from '../../../assets/images/icons/logo.png'
import profile from '../../../assets/images/icons/profile.png';

export const Header: React.FC = () => {

    return (
      <header className="topNav">
        <div className="topNav__logo">
          <NavLink to={'/projects'}>
            <img src={logo} alt=""/>
          </NavLink>
        </div>
        <div className="topNav__content">
          <ModalWindow>
            <AddNewProject/>
          </ModalWindow>
          <div className="topNav__content--search" onClick={() => console.log('Open search menu')}>
            <i className='fa fa-search'></i>
          </div>
          <div className="topNav__content--notification" onClick={() => console.log('Open notification menu')}>
            <i className='fa fa-bell-o'></i>
          </div>
          <div className="topNav__content-login">
            <div className="topNav__content-login--pic">
              <img onClick={() => console.log('Open Profile data')} src={profile} alt=""/>
            </div>
            <div className="topNav__content-login--slideDown" onClick={() => console.log('Open drop menu')}>
              <i className='fa fa-angle-down'></i>
            </div>
            <div className="topNav__content--logout" onClick={() => console.log('Open notification menu')}>
              <i className='fa fa-close'></i>
            </div>
          </div>
        </div>
      </header>
    );
};



