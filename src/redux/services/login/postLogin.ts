import axios from "axios";
import {logout, authenticated, authenticationError, isLoading} from "../servicesActions";

export function axiosLogInPost(url, email, password) {
    return (dispatch) => {
        dispatch(isLoading(true));

        axios.post(url, {email, password})
            .then((response) => {
                console.log(response);
                if (response.statusText !== 'OK') {
                    dispatch(logout(true));
                    throw Error(response.statusText);
                } else {
                    let token = response.headers['x-auth-token'];
                    localStorage.setItem('token', token);
                    dispatch(isLoading(false));
                    dispatch(authenticated(true));
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))
    };
}
