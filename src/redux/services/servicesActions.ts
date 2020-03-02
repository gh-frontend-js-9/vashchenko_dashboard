import {LOGIN, LOGIN_ERROR, LOGOUT, LOAD} from '../constants/LOGIN'

export function logins(e: string) {
    return {
        type: LOGIN,
        authenticated: e
    };
}
export function loginError(e: string) {
    return {
        type: LOGIN_ERROR,
        authenticationError: e
    };
}

export function logout(e: string) {
  localStorage.clear();
  sessionStorage.clear();
  return {
    type: LOGOUT,
    logout:e
  };
}

export function load(e: string) {
    return {
        type: LOAD,
        isLoading: e
    };
}
