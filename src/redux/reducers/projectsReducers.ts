import {GET_PROJECTS_SUCCESS} from "../constants/PROJECTS";

export function allProjects(state: any = [], action) {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return action.allProjects;
    
    default:
      return state;
  }
}

