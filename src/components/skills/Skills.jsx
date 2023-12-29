import React from 'react'
import "./skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">........</span>
      <div className="skills_center">
        <div className="skills_container container grid">
          <div className="skills_content">
            <h3 className="skills_title">
              <div className="skills_group">
                <div className="skills_data">
                  <i class="bx bxl-react skills_icon"></i>
                  <div>
                    <h3 className="skills_name"> React</h3>
                  </div>
                </div>
                <div className="skills_data">
                  <i class="bx bxl-javascript skills_icon"></i>
                  <div>
                    <h3 className="skills_name">JavaScript</h3>
                  </div>
                </div>
                <div className="skills_data">
                  <i class="bx bxl-css3 skills_icon"></i>
                  <div>
                    <h3 className="skills_name">CSS</h3>
                  </div>
                </div>
                <div className="skills_data">
                  <i class="bx bxl-html5 skills_icon"></i>
                  <div>
                    <h3 className="skills_name">HTML</h3>
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