import React from "react";
import {SideNavItem} from "./SideNavItem";

export const Sidebar: React.FC = () => {
  return (
    <div className="sideNav">
      <ul className="sideNav__content">
        <SideNavItem/>
      </ul>
    </div>
  )
};

