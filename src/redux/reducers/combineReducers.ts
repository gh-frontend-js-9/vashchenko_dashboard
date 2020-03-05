import {combineReducers} from 'redux';
import {logIn, logInError, loads, logOut} from "./loginReducers";
import {allProjects} from "./projectsReducers";

const allReducers = combineReducers({
  logIn,
  logInError,
  loads,
  logOut,
  allProjects
});

export default allReducers;
