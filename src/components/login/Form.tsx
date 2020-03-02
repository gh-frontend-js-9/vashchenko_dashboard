import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';

import Menu from './LoginMenu';
import LogIn from './Login';
import Reset from './Reset';
import Sign from './Signup';
import logo from '../../assets/images/icons/logo.png';


export default class Form extends React.Component {
    // constructor(props: any){
    //     super(props);
    //     this.state = {}
    // }
  
    render() {
        return (
          <div className='wrapper fadeInDown'>
            <div className='formContent'>
              
              <Menu />
              
              <div className='fadeIn first'>
                <Link to={'/'}>
                  <img src={logo} alt='Welcome to Virtus Dashboard'/>
                </Link>
              </div>
              <Switch>
                <Route exact path={'/login'} component={ LogIn }/>
                <Route exact path={'/reset'} component={ Reset }/>
                <Route exact path={'/signup'} component={ Sign }/>
              </Switch>
            </div>
          </div>
        )
    }
}
