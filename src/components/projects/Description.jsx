import React from 'react'

function Description(props) {
  return (
    <div className="about_box project_desc">
      <div className="section_subtitle font_3">
        {props.name}{" "}
        <span
          className="picon"
          dangerouslySetInnerHTML={{ __html: props.icon }}
        />
      </div>
      <p className="description_data">{props.desc}</p>
      <div className="links">
        <div className="url">
          <a
            href={props.url}
            className="nav_link"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
        <div className="code">
          <a
            href={props.code}
            className="nav_link"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Description