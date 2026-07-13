import React from 'react'
import { useGlobalContext } from "./context";
import logo from "../../assets/logo/xzegon.svg";
import { FaBars } from 'react-icons/fa';



const Navbar = () => {
    const {openSidebar, opSubmenu, closeSubmenu} = useGlobalContext()
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt=""/>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className='link-btn'>
              products
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
