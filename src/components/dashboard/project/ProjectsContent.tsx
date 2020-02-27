import React from 'react';
import AllProjects from './ProjectsAll';
import Workflows from './workflow/Workflows';


export default class ProjectsContent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      Projects: [],
    }
  }
  
  componentWillMount() {
    this.setState({
      // Projects: this.props.projects
      Projects: 'data props'
    })
  }
  
  render() {
    let renderContent: any = "";
    if (window.location.href.match("workflow")) {
      // renderContent = <Workflows projects={this.props.projects} />
      renderContent = <Workflows />
    } else {
      // renderContent = <AllProjects projects={this.props.projects}/>
      renderContent = <AllProjects />
    }
    return <div>
      <Workflows />
    </div>
  }
}
