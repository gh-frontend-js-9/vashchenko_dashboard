import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

// components
import LogIn from "./components/login/Login";
import SignUp from "./components/login/Signup";
import Reset from "./components/login/Reset";
import Home from "./components/dashboard/home/Home";
import Projects from "./components/dashboard/projects/Projects";
import Trends from "./components/dashboard/threads/Thread";
import Thread from "./components/dashboard/threads/Thread";
import Contacts from "./components/dashboard/contacts/Contacts";

// style
import './styles/main.scss';

const App: React.FunctionComponent = () =>
  <BrowserRouter>
    <Route exact path="/home" component={ Home }/>
    <Route path="/projects" component={Projects}/>
    <Route exact path="/trends" component={ Trends }/>
    <Route exact path="/threads" component={ Thread }/>
    <Route exact path="/contacts" component={ Contacts }/>
    <Route exact path="/reset" component={Reset}/>
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/" component={LogIn}/>
    
  </BrowserRouter>
;

export default App;
