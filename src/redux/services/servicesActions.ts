import {LOGIN, LOGIN_ERROR, LOGOUT, LOAD} from '../constants/LOGIN'

export function login(e: boolean) {
    return {
        type: LOGIN,
        authenticated: e
    };
}
export function loginError(e: boolean) {
    return {
        type: LOGIN_ERROR,
        authenticationError: e
    };
}

export function logout(e: boolean) {
  localStorage.clear();
  sessionStorage.clear();
  return {
    type: LOGOUT,
    logout:e
  };
}

export function load(e: boolean) {
    return {
        type: LOAD,
        isLoading: e
    };
}
