import React from 'react'

function Info() {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Full Time Experience</h3>
        <span className="about_subtitle">
          Application Development Analyst
          <p>
            at <b>Accenture</b>
          </p>
        </span>
      </div>
      <div className="about_box">
        <i class="bx bxs-bank about_icon"></i>
        <h3 className="about_title">Graduation</h3>
        <span className="about_subtitle">
          B-Tech in Information Technology
          <p>
            from <b>Odisha University of Technology and Research</b>
          </p>
        </span>
      </div>
      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Internship Experience</h3>
        <span className="about_subtitle">
          Front-end Developer
          <p>
            at <b>HighQ</b>
          </p>
        </span>
      </div>
    </div>
  );
}

export default Info