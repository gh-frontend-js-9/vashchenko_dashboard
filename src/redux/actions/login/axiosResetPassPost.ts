import axios from "axios";
import {logOut, logIn, logInError} from "./loginActions";

export function axiosResetPassPost(url, email, password, confirmationPassword) {
  return (dispatch) => {
    axios.post(url, {email, password, confirmationPassword})
    .then((response) => {
      if (response.statusText !== 'OK') {
        dispatch(logOut(true));
        throw Error(response.statusText);
      } else {
        dispatch(logIn(true));
      }
    })
    .catch(() =>
    dispatch(logInError(true)))
  };
}
