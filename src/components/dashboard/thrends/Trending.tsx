import React from 'react';
import TopBar from "../main/TopNav"
import SideBar from "../main/SideNav"

export default class Trends extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }

    render(){
        return <div className = "container" >
            <TopBar/>
            <SideBar/>
        </div>
    }
}
