import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import axios from 'axios'
import '../../redux/actions/axiosConfig'

// Components
import LoginMenu from "./LoginMenu";
import LogInGetContainer from "./Container";
import {Button} from "./elements/Button";
import {EmailInput} from "./elements/EmailInput";
import {PasswordInput} from "./elements/PasswordInput";
import {axiosLogInPost} from '../../redux/actions/login/axiosLoginPost';

// interface
import {loginInterfaceProps} from "../../redux/interface/loginInterfaceProps";
import {loginInterfaceState} from "../../redux/interface/loginInterfaceState";

class LogIn extends Component <loginInterfaceProps, loginInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event: any) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit(event: any) {
    const {email, password} = this.state;
    event.preventDefault();
    this.props.axiosLogInPost(`${axios.defaults.baseURL}/api/users/login`, email, password);
  };
  
  render() {
    const {email, password} = this.state;
    return (
    <div className='wrapper fadeInDown'>
      <div className='formContent'>
        <LoginMenu/>
        <div>
          <h1 className="fadeIn first">Log In</h1>
          <form name="form"
                onSubmit={this.handleSubmit}>
            <EmailInput className='fadeIn second input__text'
                        value={email}
                        onChange={this.handleChange}/>
            <PasswordInput className='fadeIn third input__text'
                           value={password}
                           onChange={this.handleChange}/>
            <br/>
            <label className="fadeIn fourth">Remember me: <input name="remember" type="checkbox"
                                                                 onChange={() => console.log('Remember me check. Need connect axiosLogin from remember me Checkbox')}/></label>
            <Button type="submit" className="fadeIn fourth input__button">Log In</Button>
          </form>
        </div>
        <div>
          {this.props.loads ? <p>Please wait...</p> : null}
          {this.props.logIn ? (<Redirect to='/projects'/>) : null}
          {this.props.logInError ?
          <p>Your email or password is wrong. Please try again or reset your password</p> : null}
        </div>
        <LogInGetContainer/>
      </div>
    </div>
    
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    logIn: state.logIn,
    logInError: state.logInError,
    loads: state.loads,
    logOut: state.logOut,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    axiosLogInPost: (url: string, email: string, password: string) =>
    dispatch(axiosLogInPost(url, email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
