import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Ismeet</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="footer_link">
              Project
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a href="" className="footer_social_link" target="_blank">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="" className="footer_social_link" target="_blank">
            <i className="uil uil-github"></i>
          </a>
          <a href="" className="footer_social_link" target="_blank">
            <i className="uil uil-envelope-alt"></i>
          </a>
        </div>
        <span className="footer_copy">All rights reserved..</span>
      </div>
    </footer>
  );
}

export default Footer