import React from 'react';
import {NavLink} from 'react-router-dom';

export default class LoginMenu extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {}
    }
    render() {
        return (
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
        </div>
        )
    }
}
