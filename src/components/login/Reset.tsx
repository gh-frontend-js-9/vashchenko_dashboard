import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import '../../redux/actions/axiosConfig'

// components
import LoginMenu from "./LoginMenu";
import {Button} from "./elements/Button";
import {EmailInput} from "./elements/EmailInput";
import {PasswordInput} from "./elements/PasswordInput";
import {axiosResetPassPost} from "../../redux/actions/login/axiosResetPassPost";
import {ConfirmPasswordInput} from "./elements/ConfirmPasswordInput";

// interface
import {loginInterfaceProps} from "../../redux/interface/loginInterfaceProps";
import {loginInterfaceState} from "../../redux/interface/loginInterfaceState";

class Reset extends Component <loginInterfaceProps, loginInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmationPassword: ""
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
    const {email, password, confirmationPassword} = this.state;
    event.preventDefault();
    this.props.axiosResetPass(`${axios.defaults.baseURL}/api/users/reset_password`, email, password, confirmationPassword);
  };
  
  render() {
    const {email, password, confirmationPassword} = this.state;
    return (
    <div className='wrapper fadeInDown'>
      <div className='formContent'>
        <LoginMenu/>
        <div>
          <h1 className="fadeIn first">Reset password</h1>
          <form name="form"
                onSubmit={this.handleSubmit}>
            <EmailInput className='fadeIn second input__text'
                        value={email}
                        onChange={this.handleChange}/>
            <PasswordInput className='fadeIn third input__text'
                           value={password}
                           onChange={this.handleChange}/>
            <ConfirmPasswordInput className='fadeIn fourth input__text'
                                  value={confirmationPassword}
                                  onChange={this.handleChange}/>
            <Button type="submit" className="fadeIn fourth input__button">Reset</Button>
          </form>
        </div>
        <div>
          <p>
            {this.props.logIn ? (<Redirect to='/'/>) : null}
            {this.props.logInError ? (<p>Please enter the valid data and try again</p>) : null}
          </p>
        </div>
      </div>
    </div>
    
    );
  }
}


const mapStateToProps = (state: any) => {
  return {
    logIn: state.logIn,
    logInError: state.logInError,
    logOut: state.logOut,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    axiosResetPass: (url: string, email: string, password: string, confirmationPassword: string) =>
    dispatch(axiosResetPassPost(url, email, password, confirmationPassword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);


