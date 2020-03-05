import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

// components
import LogIn from "./components/login/Login";
import SignUp from "./components/login/Signup";
import Reset from "./components/login/Reset";
import Projects from "./components/dashboard/projects/Projects";

// style
import './styles/main.scss';

const App: React.FunctionComponent = () =>
  <BrowserRouter>
    <Route path="/projects" component={Projects}/>
    <Route exact path="/reset" component={Reset}/>
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/" component={LogIn}/>
    
    {/*<Route exact path="/home" component={ }/>*/}
    {/*<Route path="/trends" component={ }/>*/}
    {/*<Route path="/threads" component={  }/>*/}
    {/*<Route path="/contacts" component={  }/>*/}
  </BrowserRouter>
;

export default App;
