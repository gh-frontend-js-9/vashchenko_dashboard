import {LOGIN, LOGIN_ERROR, LOAD, LOGOUT} from '../constants/LOGIN'

export function logIn(state = false, action: any) {
    switch (action.type) {
        case LOGIN:
            return action.authenticated;

        default:
            return state;
    }
}

export function logInError(state = false, action: any) {
    switch (action.type) {
        case LOGIN_ERROR:
            return action.authenticationError;

        default:
            return state;
    }
}

export function loads(state = false, action: any) {
    switch (action.type) {
        case LOAD:
            return action.isLoading;

        default:
            return state;
    }
}

export function logOut(state = false, action: any) {
    switch (action.type) {
        case LOGOUT:
            return action.logout;

        default:
            return state;
    }
}
