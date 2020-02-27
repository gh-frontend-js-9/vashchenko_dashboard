import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
          <h1 className="fadeIn first">Log In</h1>
          <form>
            <input type="text" id="email" className="fadeIn first" name="email" placeholder="Enter your email"/>
            <input type="text" id="password" className="fadeIn second" name="passwords" placeholder="Enter your password"/>
            <br />
            <label className="fadeIn third">Remember me: <input name="isGoing" type="checkbox" onChange={() => console.log('Remember me check')} /></label>
            <Link to={'/home'}>
              <input onClick={() => console.log('Log in form')} type='button' className="fadeIn third" value="Log In"/>
            </Link>
          </form>
        </div>
        )
    }
}
