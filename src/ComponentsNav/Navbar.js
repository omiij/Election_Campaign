import React, { useState } from "react";
import { Menuitems } from "./Navbar/Menuitems";
import "../ComponentsNav/Navbar/Navbar.css";
import { Button } from "./Button";
function Navbar() {
  const [state, setState] = useState(false);

  let HandleClick = () => {
    setState((state) => !state);
  };

  return (
    <div className="POSITION">
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          {/* <i className="fab fa-react" /> */}
          <a href="/">
          <img
            src="https://i.pinimg.com/originals/64/dc/63/64dc63ea80a7bad98cc2d44bfb11ef09.png"
            alt="BJP"
            className="bjpImage"
          />
          
          </a>
        </h1>
        
        <div>Mahant Daleep Rawat</div>
        <div className="menu-icon" onClick={HandleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.tittle}
                </a>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </div>
  );
}

export default Navbar;
