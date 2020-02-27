import React from 'react';

// images
import logo from '../../../assets/images/icons/logo.png';
import search from '../../../assets/images/icons/search.png';
import bell from '../../../assets/images/icons/bell.png';
import arrow from '../../../assets/images/icons/arrow.png';
import profile from '../../../assets/images/icons/profile.png';
import {Link} from "react-router-dom";

export default class TopBar extends React.Component {
    constructor(props: any){
        super(props)
    }

    render(){
        return <div className="topNav">
            <div className="topNav__logo">
                <Link to={'/home'}>
                  <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="topNav__content">
              <Link to={'/projects'}>
                <button className="topNav__content--add">
                    <span className="add">Add</span>
                    <span className="plus">+</span>
                </button>
              </Link>
                <div className="topNav__content--search">
                    <img src={search} alt=""/>
                </div>
                <div className="topNav__content--notification">
                    <img src={bell} alt=""/>
                </div>
                <div className="topNav__content-login">
                    <div className="topNav__content-login--pic">
                        <img src={profile} alt=""/>
                    </div>
                    <div className="topNav__content-login--slideDown">
                        <img src={arrow} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    }
}
