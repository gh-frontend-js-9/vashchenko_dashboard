import React from "react";
import {NavLink} from "react-router-dom";

export const SideNavItem = () => {
  const icons = [{
    name: 'fa-home',
    href: '/home'
  }, {
    name: 'fa-bars',
    href: '/projects'
  }, {
    name: 'fa-line-chart',
    href: '/trends'
  }, {
    name: 'fa-envelope',
    href: '/threads'
  }, {
    name: 'fa-users',
    href: '/contacts'
  }];
  
  let renderIcon = icons.map((icon: any, n: number) => {
    return(
    <li key={n} className="home menuBox">
      <NavLink key={n} to={icon.href}>
        <i className={`${icon.name} fa fa--color fa--hovered fa-2x`}> </i>
      </NavLink>
    </li>
    )
  });
  
  return (
  <>{renderIcon}</>
  )
};

