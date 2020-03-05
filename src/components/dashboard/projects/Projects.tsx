import React from 'react';

import {Header} from "../base/Header";
import {Sidebar} from "../base/Sidebar";
import {InfoBar} from "./InfoBar";
import ProjectsList from "./ProjectsList";

const Projects: React.FunctionComponent = () => {
  return (
  <main className="container">
    <Header/>
    <Sidebar/>
    <div className="projects">
      <InfoBar/>
      <ProjectsList/>
    </div>
  </main>
  )
};

export default Projects
