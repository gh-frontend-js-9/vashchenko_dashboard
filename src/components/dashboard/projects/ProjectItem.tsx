import React from "react"
import {Line} from "rc-progress";

const ProjectItem = (props: any) => {
  return (
    <li key={props._id} className="allProjects-list-data">
      <div className="title">{props.title}<span>{props.company}</span></div>
      <div className="value">{props.cost}</div>
      <div className="deadline">{props.deadline.slice(2, 10)}</div>
      <div className="time">{props.timeSpent} hours</div>
      <div className='progress-bar'>
        {props.progress} %
        <Line percent={props.progress} strokeColor={getProgressColor(props)}/>
      </div>
      <div className="status">{props.status}</div>
      <div key={props.assigned._id} className="assigned">{props.assigned.name}<span>{props.assigned.position}</span></div>
      <div className="edit">
      </div>
    </li>
    
  );
};

function getProgressColor(props: any) {
  if (props.progress === 0) {
    return "#9ea3b4"
  } else if (props.progress === 100) {
    return "#4caf50"
  }
  if (props.progress > 0 && props.progress < 100) {
    return "#2196f3"
  }
}

export default ProjectItem
