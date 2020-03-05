import {LOGIN, LOGIN_ERROR, LOGOUT, LOAD} from '../../constants/LOGIN'

export function logIn(bool) {
  return {
    type: LOGIN,
    authenticated: bool
  };
}

export function logInError(bool) {
  return {
    type: LOGIN_ERROR,
    authenticationError: bool
  };
}

export function loads(bool) {
  return {
    type: LOAD,
    isLoading: bool
  };
}

export function logOut(bool) {
  localStorage.clear();
  sessionStorage.clear();
  return {
    type: LOGOUT,
    logout: bool
  };
}
