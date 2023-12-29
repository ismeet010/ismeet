import React from 'react'
import "./about.css"
import Info from './Info'


function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">........</span>
      <div className="about_container container grid">
        <div className="about_desc">
          <p className="about_description">
            I am a front-end web developer well versed in technologies like
            HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind Css, Git,
            Sass/Scss,etc.
          </p>
        </div>
        <div className="about_data">
          <Info />
        </div>
      </div>
    </section>
  );
}

export default About