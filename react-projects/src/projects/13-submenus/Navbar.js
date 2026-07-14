import React from 'react'
import { useGlobalContext } from "./context";
import logo from "../../assets/logo/xzegon.svg";
import { FaBars } from 'react-icons/fa';



const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="" />
          <button className="btn nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">products</button>
          </li>
          <li>
            <button className="link-btn">developers</button>
          </li>
          <li>
            <button className="link-btn">company</button>
          </li>
        </ul>
        <button className="CTA-btn">sign in</button>
      </div>
    </nav>
  );
}

export default Navbar
