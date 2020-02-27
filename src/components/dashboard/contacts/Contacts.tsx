import React from 'react';
import TopNav from "../main/TopNav"
import SideNav from "../main/SideNav"

export default class Contacts extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {}
    }
    render(){
      return (
      <div className = "container" >
        <TopNav/>
        <SideNav/>
      </div>
      )
    }
}
