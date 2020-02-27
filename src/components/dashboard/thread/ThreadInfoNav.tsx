import React from "react";
import {Link} from 'react-router-dom';

export default class ThreadInfoNav extends React.Component {
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return <div className="infoNav">
      <div className="infoNav-left">
        <Link to="/thread">Inbox</Link>
        <Link to="/thread">Sent</Link>
        <Link to="/thread">Trash</Link>
      </div>
      <div className="infoNav-right">
        <span>Filter messages:
          <select name="filterMessages" className="showNav" id="filterMessages">
            <option className="dropdown" value="all">Date</option>
            <option value="oldest">Oldest</option>
          </select>
        </span>
      </div>
    </div>
  }
}
