import axios from 'axios';
import {logout, login, loginError} from "../servicesActions";

export function axiosLogInGet(url: string) {
    return (dispatch: any) => {
        if (sessionStorage.getItem('token')) {
            axios.get(url)
                .then((response) => {
                  if (response.statusText === 'OK') {
                    dispatch(login(true));
                  } else {
                    dispatch(logout(true));
                    throw Error(response.statusText);
                  }
                })
                .catch(() =>
                    dispatch(loginError(true)))
        }
    }
}
