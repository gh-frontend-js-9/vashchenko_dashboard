import React from 'react';
import {NavLink} from 'react-router-dom';

import Menu from "./LoginMenu";
import logo from '../../assets/images/icons/logo.png';


export default class Signup extends React.Component {
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
              <h1 className="fadeIn first">Create new account</h1>
              <form>
                <input type="text" className="fadeIn first" name="name" placeholder="Enter your name"/>
                <input type="text" className="fadeIn first" name="email" placeholder="Enter your email"/>
                <input type="text" className="fadeIn second" name="passwords" placeholder="Enter your password"/>
                <input type="text" className="fadeIn third" name="passwordsConfirm" placeholder="Confirm your password"/>
                <NavLink to={'/'}>
                  <input onClick={() => console.log('Sign up form')} type='button' className="fadeIn fourth" value="Sign Up"/>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
        )
    }
}
