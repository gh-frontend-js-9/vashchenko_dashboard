import React from "react";
import {NavLink} from "react-router-dom";

export const InfoBar: React.FunctionComponent = () => {
  
  return (
    <div className="infoNav">
      <div className="infoNav-left">
        <NavLink to={''}><i className='fa fa-inbox'/> Inbox</NavLink>
        <NavLink to={''}><i className='fa fa-telegram-plane'/> Sent</NavLink>
        <NavLink to={''}><i className='fa fa-trash'/> Trash</NavLink>
      </div>
      <div className="infoNav-right">
        <span>Filter messages:
          <select name="showProjects" className="showNav" id="showProjects">
            <option value='date'>Date</option>
            <option value='sender'>Sender</option>
            <option value='unread'>Unread</option>
          </select>
        </span>
      </div>
    </div>
  )
};
