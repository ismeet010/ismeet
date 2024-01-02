import React from 'react'
import "./about.css"
import Info from './Info'


function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      {/* <span className="section_subtitle">........</span> */}
      <div className="about_container container grid">
        <div className="about_box about_desc">
          <div className="about_description ">
            <p className="para">
              I have been working as a Front-End developer in India. I'm someone
              who loves learning new things, especially when it comes to
              creating cool animations and making websites user-friendly. I'm
              always checking out new tools to make my work better. Outside of
              work, I enjoy hanging out with people, doing outdoor activities,
              and watching Anime and TV series.
            </p>
            <p>
              I am intrigued by the entire frontend spectrum and thrive on
              working with like-minded individuals on ambitious projects. I'm
              the kind of person who's always up for new adventures.
            </p>
            <div className="slider-wrapper">
              Lets make something{" "}
              <div className="slider">
                <div className="slider-text1">unique</div>
                <div className="slider-text2">special</div>
                <div className="slider-text3">creative</div>
              </div>
              .
            </div>
          </div>
        </div>
        <div className="about_data">
          <Info />
        </div>
      </div>
    </section>
  );
}

export default About