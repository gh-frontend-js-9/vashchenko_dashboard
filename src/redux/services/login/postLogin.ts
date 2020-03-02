import axios from "axios";
import {logout, login, loginError, load} from "../servicesActions";

export function axiosLogInPost(url: string, email: string, password: string, remember: boolean) {
  return (dispatch: any) => {
    dispatch(load(true));
    
    axios.post(url, {email, password})
    .then((response) => {
      console.log(response);
      if (response.statusText !== 'OK') {
        dispatch(logout(true));
        throw Error(response.statusText);
      } else {
        let token = response.headers['x-auth-token'];
        sessionStorage.setItem('token', token);
        if (remember) {
          localStorage.setItem('token', token);
        }
        dispatch(load(false));
        dispatch(login(true));
      }
    })
    .catch(() =>
    dispatch(loginError(true)))
  };
}
