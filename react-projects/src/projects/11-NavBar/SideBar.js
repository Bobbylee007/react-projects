import React from "react";
import { links, social } from "./data";

const SideBar = () => {
  return (
    <>
    <h4>siderBar</h4>
    <div className="links-container show-container">
      <ul className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
    </>
  );
};

export default SideBar;
