import React from 'react';

let value = {
  timeSpent: 0,
  progress: 0,
  status: "Queued",
  _id: "5e2eb6086f454bdc7dedeb73",
  title: "Dashboard API",
  company: "GeekHub System",
  cost: "$2000.50",
  deadline: "2020-01-28T00:00:00.000Z",
  assigned:
  {
    position: "Frontend Developer",
    description: "Master/Lomaster",
    phone: "+48 500 400 300",
    address: "1464 La Playa St, San Francisco, US",
    organization: "GeekHub System",
    _id: "5e27651acb79413bef759836",
    email: "john.doe@email.com",
    name: "John Doe"
  }
};

export default class ProjectsAll extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
    }
  }
  

  
  reloadProjects() {
    // let proj = this.props.projects.map((value: any) => {
    let proj = (value: any) => {
      return <li key={value._id} className="allProjects-list-data">
        <div className="title">{value.title}<span>{value.company}</span></div>
        <div className="value">${value.cost}</div>
        <div className="deadline">{value.deadline}</div>
        <div className="time">{value.timeSpent} hours</div>
        <div className="progress">{value.progress}%
          <div className="progress-bar">
            <div className="progress-state" data-percent={value.progress}>
            
            </div>
          </div>
        </div>
        <div className="status">{value.status}</div>
        <div key={value.assigned._id} className="assigned">{value.assigned.name}<span>{value.assigned.position}</span></div>
        <div className="edit">
        </div>
      </li>
    };
    
    return proj;
  }
  
  // progressStateBar() {
  //   let progress = document.querySelectorAll(".allProjects-list-data .progress .progress-bar .progress-state");
  //   for (let i = 0; i < progress.length; i++) {
  //     progress[i].style.width = progress[i].dataset.percent + "%";
  //     if (progress[i].style.width === "100%") {
  //       progress[i].style.backgroundColor = "#4caf50";
  //     }
  //   }
  // }
  
  singleListElementProperties() {
    let wholeList = document.querySelectorAll('.allProjects .allProjcets-list li');
    
  }
  
  componentDidUpdate() {
    // this.progressStateBar();
  }
  
  componentDidMount() {
    // this.progressStateBar()
  }
  
  render() {
    
    this.reloadProjects();
    
    return <div className="allProjects">
      <ul className="allProjects-list">
        <li className="allProjects-list-titles">
          <div className="title">Project title</div>
          <div className="value">Value</div>
          <div className="deadline">Deadline</div>
          <div className="time">Time spent</div>
          <div className="progress">Progress</div>
          <div className="status">Status</div>
          <div className="assigned">Assigned to</div>
        </li>
        {this.reloadProjects()}
      </ul>
    </div>
  }
}
