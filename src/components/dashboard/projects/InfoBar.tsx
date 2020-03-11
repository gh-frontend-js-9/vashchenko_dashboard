import React from "react";
import {NavLink} from "react-router-dom";

export const InfoBar: React.FunctionComponent = () => {
  
  return (
    <div className="infoNav">
      <div className="infoNav-left">
        <NavLink to={'/projects'}>All Projects</NavLink>
        <NavLink to={'/projects/workflow'}>Workflow</NavLink>
      </div>
      <div className="infoNav-right">
        <span>Show projects:
          <select name="showProjects" className="showNav" id="showProjects">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="planning">Planning</option>
            <option value="quened">Quened</option>
            <option value="testing">Testing</option>
          </select>
        </span>
      </div>
    </div>
  )
};
