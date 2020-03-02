import React from 'react';
import ReactDom from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from "./components/login/Login";
import Reset from "./components/login/Reset";
import Signup from "./components/login/Signup";
import Home from "./components/dashboard/home/Home";
import Projects from "./components/dashboard/project/Projects";
  import ProjectsAll from "./components/dashboard/project/ProjectsAll";
  import Workflow from "./components/dashboard/project/workflow/Workflows";
import Trending from "./components/dashboard/thrends/Trending";
import Thread from "./components/dashboard/thread/Thread"
import Contacts from "./components/dashboard/contacts/Contacts"

import './styles/main.scss';

document.addEventListener('DOMContentLoaded',function () {
  
  class App extends React.Component{
    constructor(props: any) {
      super(props)
    }
    
    render(){
      return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={ Home }/>
          <Route path="/trends" component={ Trending }/>
          <Route path="/projects" component={ Projects }>
            {/*<Route path="/projects/all" component={ ProjectsAll }/>*/}
            {/*<Route exact path="/projects/workflow" component={ Workflow }/>*/}
          </Route>
          <Route path="/thread" component={ Thread }/>
          <Route path="/contacts" component={ Contacts }/>
          <Route exact path="/" component={ Login }/>
          <Route exact path="/reset" component={ Reset }/>
          <Route exact path="/signup" component={ Signup }/>
        </Switch>
      </BrowserRouter>
      )
    }
  }
  
  ReactDom.render(
  <App/>,
  document.getElementById('root')
  )
});
