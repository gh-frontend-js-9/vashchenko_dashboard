import axios from "axios";
import '../axiosConfig'
import {logOut, logIn, logInError, loads} from "../login/loginActions";
import {getAllProjects} from "./projectsAction";


export function axiosAllProjectsGet(url) {
    return (dispatch) => {
        dispatch(loads(true));

            axios.get(url)
                .then((response) => {
                    if (response.statusText !== 'OK') {
                        dispatch(logOut(true));
                        throw Error(response.statusText);
                    } else {
                        dispatch(loads(false));
                        dispatch(logIn(true));
                        dispatch(getAllProjects(response.data))
                    }
                })
                .catch(() =>
                    dispatch(logInError(true)))

    }
}
