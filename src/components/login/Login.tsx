import React from 'react';
import {NavLink} from 'react-router-dom';

import Menu from "./LoginMenu";
import logo from '../../assets/images/icons/logo.png';

export default class Login extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      this.handleChange = this.handleChange.bind(this);
    }
  
  handleChange(event: any) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
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
            <h1 className="fadeIn first">Log In</h1>
            <form>
              <input
                type="text"
                id="email"
                className="fadeIn first"
                name="email"
                placeholder="Enter your email"
                onChange={this.handleChange}
              />
              <input
                type="text"
                id="password"
                className="fadeIn second"
                name="passwords"
                placeholder="Enter your password"
              />
              <br />
              <label className="fadeIn third">Remember me: <input name="isGoing" type="checkbox" onChange={() => console.log('Remember me check')} /></label>
              <NavLink to={'/home'}>
                <input onClick={() => console.log('Log in form')} type='button' className="fadeIn third" value="Log In"/>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
      )
    }
}
