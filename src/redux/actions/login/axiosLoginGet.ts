import axios from "axios";
import {logOut, logIn, logInError} from "./loginActions";

export function axiosLogInGet(url) {
  return (dispatch) => {
    
    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      axios.get(url)
      .then((response) => {
        let myId = (response.data._id);
        localStorage.setItem('myId', myId);
        if (response.statusText !== 'OK') {
          dispatch(logOut(true));
          throw Error(response.statusText);
        } else {
          dispatch(logIn(true));
        }
      })
      .catch(() =>
      dispatch(logInError(true)))
    }
  }
}
