import React from 'react'
import logo from "../../assets/logo/xzegon.svg";
import { FaTimes } from 'react-icons/fa';
import {social, links} from './data'
import { useGlobalContext } from './context';


const SideBar = () => {
        const {isSidebarOpen, closeSidebar} = useGlobalContext();
    
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"} `}>
      <div className="sidebar-hearder">
        <img src={logo} className="logo" alt="code awesome" />
        <button className="closebtn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar
