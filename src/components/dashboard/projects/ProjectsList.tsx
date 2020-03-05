import '../../../redux/actions/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {axiosAllProjectsGet} from "../../../redux/actions/projects/axiosAllProjectsGet";
import Loads from "./element/Loads";
import ProjectItem from "./ProjectItem";

import {projectsInterfaceProps} from "../../../redux/interface/projectsInterfaceProps";

class ProjectsList extends Component <projectsInterfaceProps, {}> {
  componentDidMount() {
    this.props.axiosAllProjectsGet(`${axios.defaults.baseURL}/api/projects/`);
  };
  
  render() {
    let project = this.props.allProjects.map((project: any) =>
    <ProjectItem{...project} key={project._id}/>);
    
    return (
    <div className="allProjects">
      <ul className="allProjects-list">
        <li className="allProjects-list-titles">
          <div className="title">Project title</div>
          <div className="value">Value</div>
          <div className="deadline">Deadline</div>
          <div className="time">Time spent</div>
          <div className="status">Progress</div>
          <div className="status">Status</div>
          <div className="assigned">Assigned to</div>
        </li>
        {this.props.loads ? <Loads/> : <>{project}</>}      </ul>
    </div>
      )
  }
}

const mapStateToProps = (state: any) => {
  return {
    allProjects: state.allProjects,
    logOut: state.logOut,
    loads: state.loads,
    logIn: state.logIn,
    logInError: state.logInError,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    axiosAllProjectsGet: (url: string) => dispatch(axiosAllProjectsGet(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);


