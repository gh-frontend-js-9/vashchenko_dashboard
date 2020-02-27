import React from 'react';

import TopNav from "../main/TopNav"
import SideNav from "../main/SideNav"
import ProjectsInfoNav from "./ProjectsInfoNav"
import ProjectsContent from "./ProjectsContent"

export default class Projects extends React.Component{
  constructor(props: any){
    super(props);
    this.state = {
      Projects: [],
    }
  }
  componentWillMount(){
    let myHeaders = new Headers();
    myHeaders.append("x-access-token", "null");
    
    fetch("https://geekhub-frontend-js-9.herokuapp.com/api/projects/",
    { method: 'GET',
      headers: myHeaders,
      redirect: 'follow'})
    .then(response => response.text())
    .then(result => console.log(result));
   
    const AllProjects =  fetch("https://geekhub-frontend-js-9.herokuapp.com/api/projects/",{ method: 'GET',
      headers: myHeaders,
      redirect: 'follow'})
    .then(response => response.text())
    .then(result => result);
  }

  render() {
    return <div className = "container" >
      <TopNav/>
      <SideNav/>
      <div className="projects">
        <ProjectsInfoNav />
        {/*<ProjectsContent projects={'this.AllProjects'}/>*/}
        <ProjectsContent />
      </div>
    
    </div>
  }
}
