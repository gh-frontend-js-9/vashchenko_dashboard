import axios from "axios";
import {logOut, logIn, logInError, loads} from "./loginActions";
import '../axiosConfig'

export function axiosSignUpPost(url, name, email, password) {
  return (dispatch) => {
    dispatch(loads(true));
    
    axios.post(url, {name, email, password})
    .then((response) => {
      if (response.statusText !== 'Created') {
        dispatch(logOut(true));
        throw Error(response.statusText);
      } else {
        dispatch(loads(false));
        dispatch(logIn(true));
      }
    })
    .catch(() =>
    dispatch(logInError(true)))
  };
}
