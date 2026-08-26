import React from "react";
import { useGlobalContext } from "./context";
import logo from "../../assets/logo/xzegon.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  
  const displaySubmenu = (e) => {
    console.log(e.target);                              //target a button
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect(); //to get size and location of button
    console.log(tempBtn);                           // to see the location and size of button target
    const center = (tempBtn.left + tempBtn.right)/2
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, {center, bottom}); // invoking submenu parsing in page location as (center & bottom)
  };
const handleSubmenu = (e) => {
  if(!e.target.classList.contains('link-btn')){
    closeSubmenu()
  }
}

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="" />
          <button className="btn nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="CTA-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
