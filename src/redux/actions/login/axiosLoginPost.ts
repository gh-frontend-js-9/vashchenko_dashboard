import axios from "axios";
import {logOut, logIn, logInError, loads} from "./loginActions";

export function axiosLogInPost(url, email, password) {
    return (dispatch) => {
        dispatch(loads(true));

        axios.post(url, {email, password})
            .then((response) => {
                let myId = (response.data._id);
                localStorage.setItem('myId', myId);

                if (response.statusText !== 'OK') {
                    dispatch(logOut(true));
                    throw Error(response.statusText);
                } else {
                    localStorage.setItem('token', response.headers['x-login-token']);
                    sessionStorage.setItem('token', response.headers['x-login-token']);
                    dispatch(loads(false));
                    dispatch(logIn(true));
                }
            })
            .catch(() =>
                dispatch(logInError(true)))
    };
}
