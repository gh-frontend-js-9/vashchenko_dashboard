import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginMenu extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
          <Link to={'/login'}>
            <h2 className="inactive underlineHover"> Log In </h2>
          </Link>
          <Link to={'/reset'}>
            <h2 className="inactive underlineHover"> Reset </h2>
          </Link>
          <Link to={'/signup'}>
            <h2 className="inactive underlineHover"> Sign Up </h2>
          </Link>
        </div>
        )
    }
}
