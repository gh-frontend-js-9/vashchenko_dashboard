import axios from "axios";
import {logout, login, loginError, load} from "../servicesActions";
import '../axiosConfig'

export function axiosSignUpPost(url: string, name: string, email: string, password: string) {
  return (dispatch: any) => {
    dispatch(load(true));
    
    axios.post(url, {name, email, password})
    .then((response) => {
      console.log(response);
      if (response.statusText !== 'Created') {
        dispatch(logout(true));
        throw Error(response.statusText);
      } else {
        dispatch(load(false));
        dispatch(login(true));
      }
    })
    .catch(() =>
    dispatch(loginError(true)))
  };
}
