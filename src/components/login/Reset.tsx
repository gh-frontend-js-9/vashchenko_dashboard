import React from 'react';
import {NavLink} from 'react-router-dom';

import Menu from "./LoginMenu";
import logo from '../../assets/images/icons/logo.png';

export default class Reset extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div className='wrapper fadeInDown'>
          <div className='formContent'>
            <Menu />
            <div className='fadeIn first'>
              <NavLink to={'/'}>
                <img src={logo} alt='Welcome to Virtus Dashboard'/>
              </NavLink>
            </div>
            <div>
              <h1 className="fadeIn first">Reset password</h1>
              <form>
                <input type="text" className="fadeIn first" name="email" placeholder="Enter your email"/>
                <input type="text" className="fadeIn second" name="passwords" placeholder="Enter your password"/>
                <input type="text" className="fadeIn third" name="passwordsConfirm" placeholder="Confirm your password"/>
                <NavLink to={'/'}>
                  <input onClick={() => console.log('Log in form')} type='button' className="fadeIn fourth" value="Reset"/>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
        )
    }
}
