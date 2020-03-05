import React from "react"

export const ProjectsInput = (props: any) =>
  <input key={props._id}
         required
         {...props}
         value={props.assigned}
         onChange={props.handleChange}
  />
;
