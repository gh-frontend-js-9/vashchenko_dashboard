import axios from "axios";
import {logout, login, loginError} from "../servicesActions";

export function axiosResetPass(url: string, email: string, password: string, confirmationPassword: string) {
  return (dispatch: any) => {
    
    axios.post(url, {email, password, confirmationPassword})
    .then((response) => {
      console.log(response);
      if (response.statusText !== 'OK') {
        dispatch(logout(true));
        throw Error(response.statusText);
      } else {
        dispatch(login(true));
      }
    })
    .catch(() =>
    dispatch(loginError(true)))
  };
}
