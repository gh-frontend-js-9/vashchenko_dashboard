import '../../redux/actions/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosLogInGet} from '../../redux/actions/login/axiosLoginGet';

interface IProps {
  axiosLogInGet?: any,
}

class Container extends Component <IProps, {}> {
  componentDidMount() {
    this.props.axiosLogInGet(`${axios.defaults.baseURL}/api/users/`);
  };
  
  render() {
    return (<> </>);
  }
}

const mapStateToProps = (state: any) => {
  return {
    logOut: state.logOut,
    logIn: state.logIn,
    logInError: state.logInError,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    axiosLogInGet: (url: string) => dispatch(axiosLogInGet(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);


