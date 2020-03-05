import '../../redux/actions/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

// components
import LoginMenu from './LoginMenu';
import {axiosSignUpPost} from '../../redux/actions/login/axiosSignUpPost';
import {Button} from './elements/Button';
import {EmailInput} from './elements/EmailInput';
import {PasswordInput} from './elements/PasswordInput';
import {NameInput} from './elements/NameInput';
import {ConfirmPasswordInput} from './elements/ConfirmPasswordInput';

// interface
import {loginInterfaceProps} from "../../redux/interface/loginInterfaceProps";
import {loginInterfaceState} from "../../redux/interface/loginInterfaceState";

class SignUp extends Component <loginInterfaceProps, loginInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmationPassword: '',
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
    const {name, email, password, confirmationPassword} = this.state;
    event.preventDefault();
    this.props.axiosSignUpPost(`${axios.defaults.baseURL}/api/users/`, name, email, password, confirmationPassword);
  };
  
  render() {
    const {name, email, password, confirmationPassword} = this.state;
    return (
    <div className='wrapper fadeInDown'>
      <div className='formContent'>
        <LoginMenu/>
        <div>
          <h1 className='fadeIn first'>Sign Up</h1>
          <form name='form'
                onSubmit={this.handleSubmit}>
            <NameInput className='fadeIn first input__text'
                       value={name}
                       onChange={this.handleChange}/>
            <EmailInput className='fadeIn second input__text'
                        value={email}
                        onChange={this.handleChange}/>
            <PasswordInput className='fadeIn third input__text'
                           value={password}
                           onChange={this.handleChange}/>
            <ConfirmPasswordInput className='fadeIn fourth input__text'
                                  value={confirmationPassword}
                                  onChange={this.handleChange}/>
            <Button type='submit' className='fadeIn fifth input__button'>Sign Up</Button>
          </form>
        </div>
        <div>
          {this.props.loads ? <p>Please wait...</p> : null}
          {this.props.logIn ? (<Redirect to='/'/>) : null}
          {this.props.logInError ? <p>Please enter the valid data and try again</p> : null}
        </div>
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state: any) => {
  return {
    logIn: state.logIn,
    loads: state.loads,
    logInError: state.logInError,
    logOut: state.logOut,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    axiosSignUpPost: (url: string, name: string, email: string, password: string) =>
    dispatch(axiosSignUpPost(url, name, email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


