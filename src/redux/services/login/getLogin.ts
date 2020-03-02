import axios from 'axios';
import {logout, authenticated, authenticationError} from "../servicesActions";

export function axiosLogInGet(url: string) {
    return (dispatch: string) => {

        if (localStorage.getItem('token')) {
            axios.get(url)
                .then((response) => {
                    if (response.statusText !== 'OK') {
                        dispatch(logout(true));
                        throw Error(response.statusText);
                    } else {
                        dispatch(authenticated(true));
                    }
                })
                .catch(() =>
                    dispatch(authenticationError(true)))
        }
    }
}
