import {GET_PROJECTS_SUCCESS} from "../../constants/PROJECTS";

export function getAllProjects(allProjects) {
    return {
        type: GET_PROJECTS_SUCCESS,
        allProjects
    };
}
