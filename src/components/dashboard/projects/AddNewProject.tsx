import React, {Component} from "react"
import axios from 'axios';
import {Button} from "../../login/elements/Button";
import {ProjectsInput} from "./element/projectsInput";

import {projectsInterfaceProps} from "../../../redux/interface/projectsInterfaceProps";
import {projectsInterfaceState} from "../../../redux/interface/projectsInterfaceState";

export default class AddNewProject extends Component <projectsInterfaceProps, projectsInterfaceState> {
  constructor(props: any) {
    super(props);
    this.state = {
      createProject: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event: {
    target: {
      name: string;
      value: string;
    };
  }) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  
  createNewProject() {
    axios({
      method: 'post',
      url: `${axios.defaults.baseURL}/api/projects/`,
      data: {
        title: this.state.title,
        company: this.state.company,
        cost: this.state.cost,
        deadline: this.state.deadline,
        assigned: this.state.assigned,
      },
      headers: {
        'x-access-token': localStorage.token,
      }
    })
    .then(response => response.data)
    .then((data: object) => {
      this.setState({
        createProject: data,
      });
    })
    .catch((error: string) => {
      console.error(error);
    });
  }
  
  handleSubmit(event: {
    preventDefault: () => void;
  }) {
    event.preventDefault();
    this.createNewProject();
  }
  
  render() {
    return (
    <form className='projects-add'
          key={this.state.assigned}
          onSubmit={this.handleSubmit}>
      <ProjectsInput value={this.state.title}
                     type="text"
                     name='title'
                     placeholder="Title"
                     className='input__text'
                     onChange={this.handleChange}/>
      <ProjectsInput value={this.state.company}
                     type="text"
                     name='company'
                     placeholder="Company"
                     className='input__text'
                     onChange={this.handleChange}/>
      <ProjectsInput value={this.state.cost}
                     type="number"
                     name='cost'
                     placeholder="Cost"
                     className='input__text'
                     onChange={this.handleChange}/>
      <ProjectsInput value={this.state.deadline}
                     type="date"
                     name='deadline'
                     placeholder="Deadline"
                     className='input__text'
                     onChange={this.handleChange}/>
      <ProjectsInput value={this.state.assigned}
                     name='assigned'
                     type='text'
                     placeholder='Assigned'
                     className='input__text'
                     onChange={this.handleChange}/>
      <Button type='submit' className='input__button'>Submit</Button>
    </form>
    )
  }
}


