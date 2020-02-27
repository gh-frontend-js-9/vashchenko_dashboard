import React from 'react';
import {Link} from 'react-router-dom';

// Images
import homeIcon from '../../../assets/images/icons/home-color.png';
import homeIconActive from '../../../assets/images/icons/home-white.png';
import trendsIcon from '../../../assets/images/icons/trends-color.png';
import trendsIconActive from '../../../assets/images/icons/trends-white.png';
import projectIcon from '../../../assets/images/icons/projects-color.png';
import projectIconActive from '../../../assets/images/icons/projects-white.png';
import threadIcon from '../../../assets/images/icons/thread-color.png';
import threadIconActive from '../../../assets/images/icons/thread-white.png';
import contactsIcon from '../../../assets/images/icons/contacts-color.png';
import contactsIconActive from '../../../assets/images/icons/contacts-white.png';


export default class SideNav extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {
      homeIconSrc: homeIcon,
      projectsIconSrc: projectIcon,
      trendsIconSrc: trendsIcon,
      emailIconSrc: threadIcon,
      accountIconSrc: contactsIcon
    }
  }
  
  navLocation () {
    let tabs = document.querySelectorAll(".sideNav .sideNav__content li");
    
    window.location.pathname === "/home" ? tabs[0].classList.add("activeTab")
                                         : tabs[0].classList.remove("activeTab");
    window.location.pathname.match("/projects") ? tabs[1].classList.add("activeTab")
                                                       : tabs[1].classList.remove("activeTab");
    window.location.pathname.match("/trends") ? tabs[2].classList.add("activeTab")
                                                     : tabs[2].classList.remove("activeTab");
    window.location.pathname.match("/thread") ? tabs[3].classList.add("activeTab")
                                                     : tabs[3].classList.remove("activeTab");
    window.location.pathname.match("/contacts") ? tabs[4].classList.add("activeTab")
                                                       : tabs[4].classList.remove("activeTab");
    
    tabs[0].classList.contains("activeTab") ? this.setState({homeIconSrc: homeIconActive})
                                            : this.setState({homeIconSrc: homeIcon});
    tabs[1].classList.contains("activeTab") ? this.setState({projectsIconSrc: projectIconActive})
                                            : this.setState({projectsIconSrc: projectIcon});
    tabs[2].classList.contains("activeTab") ? this.setState({trendsIconSrc: trendsIconActive})
                                            : this.setState({trendsIconSrc: trendsIcon});
    tabs[3].classList.contains("activeTab") ? this.setState({emailIconSrc: threadIconActive})
                                            : this.setState({emailIconSrc: threadIconActive});
    tabs[4].classList.contains("activeTab") ? this.setState({accountIconSrc: contactsIconActive})
                                            : this.setState({accountIconSrc: contactsIcon});
  };
  
  componentDidMount() {
    this.navLocation();
  }
  
  render() {
    return <div className="sideNav">
      <ul className="sideNav__content">
        <li className="home menuBox">
          <Link to="/home">
            {/*<img src={this.state.homeIconSrc} alt="home page"/>*/}
            <img src={homeIcon} alt="home"/>
          </Link>
        </li>
        <li className="project menuBox">
          <Link to="/projects">
            {/*<img src={this.state.projectsIconSrc} alt="projects and workflow"/>*/}
            <img src={projectIcon} alt="projects"/>
          </Link>
        </li>
        <li className="trending menuBox">
          <Link to="/trends">
            <img src={trendsIcon} alt="trending"/>
          </Link>
        </li>
        <li className="inbox menuBox">
          <Link to="/thread">
            <img src={threadIcon} alt="email"/>
          </Link>
        </li>
        <li className="account menuBox">
          <Link to="/contacts">
            <img src={contactsIcon} alt="account"/>
          </Link>
        </li>
      </ul>
    </div>
  }
}
