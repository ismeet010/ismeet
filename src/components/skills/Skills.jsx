import React from 'react'
import "./skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      {/* <span className="section_subtitle">........</span> */}
      <div className="skills_center">
        <div className="skills_container container grid">
          <div className="skills_content">
            <h3 className="skills_title">
              <div className="skills_group">
                <div className="skills_data">
                  <i className="bx bxl-react skills_icon"></i>
                  <div>
                    <h3 className="skills_name"> React</h3>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="bx bxl-javascript skills_icon"></i>
                  <div>
                    <h3 className="skills_name">JavaScript</h3>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="bx bxl-python skills_icon"></i>
                  <div>
                    <h3 className="skills_name">Python</h3>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="bx bxl-css3 skills_icon"></i>
                  <div>
                    <h3 className="skills_name">CSS</h3>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="bx bxl-html5 skills_icon"></i>
                  <div>
                    <h3 className="skills_name">HTML</h3>
                  </div>
                </div>
                <div className="skills_data">
                  {/* <i class="bx bxl-sql skills_icon"></i> */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    viewBox="0 0 32 32"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="skills_icon"
                  >
                    <path d="M5.082 5.593c-0.564 0.564-0.423 1.213 0.564 2.679 0.508 0.761 1.1 1.946 1.326 2.623 0.226 0.705 0.677 1.664 0.987 2.143 0.564 0.79 0.564 0.959 0.197 2.397-0.226 0.902-0.31 2.031-0.197 2.736 0.169 1.185 1.128 2.905 1.72 3.102 0.508 0.169 1.241-0.733 1.269-1.551 0-0.705 0.028-0.733 0.338-0.226 0.536 0.874 2.228 2.735 2.369 2.594 0.056-0.056-0.31-0.79-0.846-1.607-0.508-0.846-1.1-1.946-1.325-2.454-0.31-0.846-0.423-0.902-0.79-0.508-0.226 0.226-0.508 0.874-0.592 1.466-0.226 1.354-0.733 1.523-1.128 0.367s-0.395-3.131 0-4.484c0.282-0.931 0.254-1.184-0.226-1.89-0.31-0.423-0.79-1.438-1.044-2.256-0.254-0.79-0.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115 0.056-1.89 0.479 0.085 1.213 0.423 1.664 0.733 0.423 0.31 1.156 0.564 1.607 0.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241 0.423 3.835 2.002 3.835 2.341 0 0.113-0.649 0.282-1.438 0.338-2.115 0.226-2.313 0.62-0.931 1.861 0.649 0.564 1.862 1.438 2.736 1.918l1.579 0.902-0.733-0.931c-0.423-0.508-1.297-1.297-1.974-1.72s-1.213-0.874-1.213-0.987c0-0.113 0.479-0.31 1.072-0.395 1.579-0.282 2.030-0.423 2.030-0.705 0-0.423-2.848-2.566-4.202-3.159-1.156-0.536-1.297-0.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-0.649-0.113-1.551-0.451-1.946-0.733-0.931-0.705-2.82-0.959-3.272-0.479z"></path>
                  </svg>
                  <div>
                    <h3 className="skills_name">SQL</h3>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills