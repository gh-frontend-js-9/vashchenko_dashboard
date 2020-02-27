import React from "react";
import {Link} from 'react-router-dom';

export default class ProjectsInfoNav extends React.Component {
  constructor(props: string) {
    super(props)
  }
  
  render() {
    return <div className="infoNav">
      <div className="infoNav-left">
        <Link to={'/projects/all'}>All Projects</Link>
        <Link to={'/projects/workflow'}>Workflow</Link>
      </div>
      <div className="infoNav-right">
        <span>Show projects:
          <select name="showProjects" className="showNav" id="showProjects">
            <option className="dropdown" value="all">All</option>
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
  }
}
