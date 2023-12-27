import React, { useState } from 'react'
import "./header.css"

function Header() {
    // toggle menu
    const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            Ismeet
          </a>

          <div className={menu ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active-link">
                  <i className="uil uil-estate nav_icon"></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="uil uil-user nav_icon"></i> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-file-alt nav_icon"></i> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#work" className="nav_link">
                  <i className="uil uil-scenery nav_icon"></i>Projects
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-message nav_icon"></i>Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav_close"
              onClick={() => setMenu(!menu)}
            ></i>
          </div>
          <div className="nav_toggle" onClick={() => setMenu(!menu)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header