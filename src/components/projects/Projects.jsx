import React, { useEffect, useState } from 'react'
import "./projects.css"
import Description from './Description';

function Projects() {
    const [item, setItem] = useState({})
    var createSvgString = (svgString) => svgString;
    const list = [
      {
        name: "Little Lemon Website",
        icon: createSvgString(
          `<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 48 48" id="eat"><path fill="#06dbcc" d="M17 19.928h-2V43a1 1 0 0 0 2 0z"></path><path fill="#f4a0c2" d="M34.502 18.964h-.004a4.502 4.502 0 0 1-3.181-1.317A4.502 4.502 0 0 1 30 14.466V9.728a4.497 4.497 0 0 1 4.498-4.498h.004A4.498 4.498 0 0 1 39 9.728v4.738a4.502 4.502 0 0 1-1.317 3.181 4.502 4.502 0 0 1-3.181 1.317H35v22.5a1 1 0 0 1-2 0v-22.5z"></path><path d="M12 19.4a5.002 5.002 0 0 1-4-4.9V4a1 1 0 0 1 2 0v10.5a3 3 0 0 0 3 3h1V4a1 1 0 0 1 2 0v13.5h1a3 3 0 0 0 3-3V4a1 1 0 0 1 2 0v10.5a5.002 5.002 0 0 1-4 4.9V42c0 .796-.316 1.559-.879 2.121a2.996 2.996 0 0 1-4.242 0A2.996 2.996 0 0 1 12 42Zm18-.075A6.999 6.999 0 0 1 26 13v-3a6.999 6.999 0 0 1 7-7 7.003 7.003 0 0 1 7 7v3a6.999 6.999 0 0 1-4 6.325V42c0 .796-.316 1.559-.879 2.121a2.996 2.996 0 0 1-4.242 0A2.996 2.996 0 0 1 30 42ZM16 19.5h-2V42a.997.997 0 0 0 1 1 .997.997 0 0 0 1-1Zm18 .428c-.693.082-1.339.058-2 0V42a.997.997 0 0 0 1 1 .997.997 0 0 0 1-1ZM38 10v3a5.004 5.004 0 0 1-1.464 3.536 5.004 5.004 0 0 1-7.072 0A5.004 5.004 0 0 1 28 13v-3c0-1.326.527-2.598 1.464-3.536a5.004 5.004 0 0 1 7.072 0A5.004 5.004 0 0 1 38 10Z"></path></svg>`
        ),
        desc: "This is a restaurant's website created using Reactjs and hooks like useEffect, useState, having functionality like booking a table, checking on the week's special dishes",
        url: "https://ismeet010.github.io/little-lemon-app/",
        code: "https://github.com/ismeet010/little-lemon-app",
      },
      {
        name: "Portfolio",
        icon: createSvgString(
          `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 64 64" id="portfolio-website"><g transform="translate(-288 -288)"><path fill="#3e4f59" fill-rule="evenodd" d="m 298,297 h 49 v 6 h -49 z"></path><path fill="#acbec2" fill-rule="evenodd" d="m 298,303 h 49 v 40 h -49 z"></path><path fill="#e8edee" fill-rule="evenodd" d="m 298,303 v 40 h 29.76953 a 28.484051,41.392605 35.599482 0 0 18.625,-40 z"></path><path fill-rule="evenodd" d="m 300,296 c -1.64501,0 -3,1.355 -3,3 v 40 c 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 v -40 c 0,-0.56413 0.43587,-1 1,-1 h 45 c 0.56413,0 1,0.43587 1,1 v 3 h -42 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 h 42 v 37 c 0,0.56413 -0.43587,1 -1,1 h -49 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 h 49 c 1.64501,0 3,-1.35499 3,-3 0,-14 0,-28 0,-42 0,-1.645 -1.35499,-3 -3,-3 z" color="#000"></path><path style="-inkscape-stroke:none" fill="#ed7161" fill-rule="evenodd" d="m 343,299 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 0,-0.55228 -0.44771,-1 -1,-1 z" color="#000"></path><path style="-inkscape-stroke:none" fill="#ecba16" fill-rule="evenodd" d="m 339,299 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 0,-0.55228 -0.44771,-1 -1,-1 z" color="#000"></path><path style="-inkscape-stroke:none" fill="#42b05c" fill-rule="evenodd" d="m 335,299 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 0,-0.55228 -0.44771,-1 -1,-1 z" color="#000"></path><path style="-inkscape-stroke:none" fill-rule="evenodd" d="M293 342a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zM301 302c-.55228 0-1 .44772-1 1 0 .55229.44772 1 1 1 .55229 0 1-.44771 1-1 0-.55228-.44771-1-1-1z" color="#000"></path><path fill-rule="evenodd" d="M319 307.06836a1 1 0 00-1 1v28.86328a1 1 0 001 1 1 1 0 001-1v-28.86328a1 1 0 00-1-1zM310 326a1 1 0 00-1 1 1 1 0 001 1h5a1 1 0 001-1 1 1 0 00-1-1zM303 326a1 1 0 00-1 1 1 1 0 001 1h3a1 1 0 001-1 1 1 0 00-1-1zM303 332a1 1 0 00-1 1 1 1 0 001 1h12a1 1 0 001-1 1 1 0 00-1-1zM332 309a1 1 0 00-1 1 1 1 0 001 1h9a1 1 0 001-1 1 1 0 00-1-1z" color="#000"></path><path style="-inkscape-stroke:none" fill-rule="evenodd" d="m 324,309 c -0.55228,0 -1,0.44771 -1,1 0,0.55228 0.44772,1 1,1 0.55229,0 1,-0.44772 1,-1 0,-0.55229 -0.44771,-1 -1,-1 z" color="#000"></path><path fill-rule="evenodd" d="m 332,325 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 9 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" color="#000"></path><path style="-inkscape-stroke:none" fill-rule="evenodd" d="m 324,325 c -0.55228,0 -1,0.44771 -1,1 0,0.55228 0.44772,1 1,1 0.55229,0 1,-0.44772 1,-1 0,-0.55229 -0.44771,-1 -1,-1 z" color="#000"></path><path fill-rule="evenodd" d="m 324,317 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 17 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" color="#000"></path><path style="-inkscape-stroke:none" fill-rule="evenodd" d="m 324,334 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 17 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" color="#000"></path><path fill="#ffa221" fill-rule="evenodd" d="M312.00001 312a2.99999 2.99999 0 01-2.99999 3 2.99999 2.99999 0 01-2.99999-3 2.99999 2.99999 0 012.99999-2.99998 2.99999 2.99999 0 012.99999 2.99998zM304.00002 321c0-3.31371 2.23858-6 5-6 2.76142 0 4.99998 2.68629 4.99998 6z"></path><path fill="#ffc343" fill-rule="evenodd" d="m 307.82621,309.24415 a 2.99999,2.99999 0 0 0 -1.82617,2.75586 2.99999,2.99999 0 0 0 3,3 2.99999,2.99999 0 0 0 0.68555,-0.0801 5.7604036,9.6529589 0 0 0 -1.85938,-5.67578 z"></path><path fill="#ffc343" fill-rule="evenodd" d="m 309.00004,315.00001 c -2.76142,0 -5,2.68629 -5,6 h 5.07227 a 5.7604036,9.6529589 0 0 0 0.6875,-4.54297 5.7604036,9.6529589 0 0 0 -0.0606,-1.39844 C 309.47078,315.0202 309.23732,315 309.00004,315 Z"></path><path fill-rule="evenodd" d="m 309.00004,308.00001 c -2.19728,0 -3.99999,1.80272 -4,4 0,1.09667 0.44883,2.09529 1.17188,2.82031 -1.91443,1.19449 -3.17188,3.55834 -3.17188,6.17969 a 1.000105,1.000105 0 0 0 1,1 h 4 a 1.000005,1.000005 0 0 0 1,-1 1.000005,1.000005 0 0 0 -1,-1 h -2.83594 c 0.39188,-2.32414 1.98868,-4 3.83594,-4 1.84726,0 3.44406,1.67586 3.83594,4 h -0.83594 a 1.000005,1.000005 0 0 0 -1,1 1.000005,1.000005 0 0 0 1,1 h 2 a 1.000105,1.000105 0 0 0 1,-1 c 0,-2.62135 -1.25745,-4.9852 -3.17188,-6.17969 0.72305,-0.72502 1.17188,-1.72364 1.17188,-2.82031 -1e-5,-2.19728 -1.80272,-4 -4,-4 z m 0,2 c 1.1164,0 2,0.8836 2,2 0,1.11641 -0.88359,2 -2,2 -1.11641,0 -2,-0.88359 -2,-2 0,-1.1164 0.8836,-2 2,-2 z" color="#000"></path></g></svg>`
        ),
        desc: "Personal Portfolio Website made using Reactjs, Emailjs, react-router, useEffect and useState hooks",
        url: "https://ismeet010.github.io/ismeet/",
        code: "https://github.com/ismeet010/ismeet",
      },
      {
        name: "To do list",
        icon: createSvgString(`<svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="list"
              >
                <path
                  fill="#ffa88a"
                  d="M59.42,20.24l-7.57,9L38.67,45,31,48.28,33,40.18,48.75,21.36l5-5.91a2.48,2.48,0,0,1,3.5-.3l1.9,1.59A2.49,2.49,0,0,1,59.42,20.24Z"
                ></path>
                <path
                  fill="#fff"
                  d="M46,11.83V59a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V5A2,2,0,0,1,6,3H37.17a2,2,0,0,1,1.42.59l6.82,6.82A2,2,0,0,1,46,11.83Z"
                ></path>
                <path
                  fill="#e6e6e6"
                  d="M46 20V40.9l-5.49 6.54L30.39 51.83a2 2 0 0 1-2.74-2.3l2.56-10.74zM46 11.83V14H37a2 2 0 0 1-2-2V3h2.17a2 2 0 0 1 1.42.59l6.82 6.82A2 2 0 0 1 46 11.83z"
                ></path>
                <path
                  fill="#fd9467"
                  d="M51.85,29.26,38.67,45,31,48.28,33,40.18,48.75,21.36A17.26,17.26,0,0,1,51.85,29.26Z"
                ></path>
                <polygon
                  fill="#61c3b6"
                  points="38 3 38 11 46 11 38 3"
                ></polygon>
                <path
                  fill="#61c3b6"
                  d="M59.42 20.24L57 23.09l-5.7-4.79 2.39-2.85a2.48 2.48 0 0 1 3.5-.3l1.9 1.59A2.49 2.49 0 0 1 59.42 20.24zM22 14H33a1 1 0 0 0 0-2H22a1 1 0 0 0 0 2zM21 26H39a1 1 0 0 0 0-2H21a1 1 0 0 0 0 2z"
                ></path>
                <path
                  fill="#fd9467"
                  d="M29,37a1,1,0,0,0-1-1H21a1,1,0,0,0,0,2h7A1,1,0,0,0,29,37Z"
                ></path>
                <path
                  fill="#61c3b6"
                  d="M17,33H11a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V34A1,1,0,0,0,17,33Zm-1,6H12V35h4Z"
                ></path>
                <path
                  fill="#fd9467"
                  d="M25,48H21a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"
                ></path>
                <path
                  fill="#61c3b6"
                  d="M17,45H11a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V46A1,1,0,0,0,17,45Zm-1,6H12V47h4Z"
                ></path>
                <path
                  fill="#fd9467"
                  d="M13.29 28.71A1 1 0 0 0 14 29h.16a1 1 0 0 0 .73-.54l3-6a1 1 0 1 0-1.78-.9l-2.38 4.76-2-2a1 1 0 0 0-1.42 1.42zM13.29 16.71A1 1 0 0 0 14 17h.16a1 1 0 0 0 .73-.54l3-6a1 1 0 1 0-1.78-.9l-2.38 4.76-2-2a1 1 0 0 0-1.42 1.42z"
                ></path>
                <polygon
                  fill="#fff"
                  points="38.67 44.97 31.03 48.28 32.96 40.18 38.67 44.97"
                ></polygon>
                <path
                  fill="#4e5b5f"
                  d="M61,18.34A3.43,3.43,0,0,0,59.76,16l-1.91-1.6a3.48,3.48,0,0,0-4.9.43l-2.4,2.85h0L47,21.9V11.83a3,3,0,0,0-.88-2.12L39.29,2.88A3,3,0,0,0,37.17,2H6A3,3,0,0,0,3,5V59a3,3,0,0,0,3,3H44a3,3,0,0,0,3-3V36.6L60.19,20.88A3.48,3.48,0,0,0,61,18.34ZM39,5.41,43.59,10H39ZM45,59a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4H37v7a1,1,0,0,0,1,1h7V24a1,1,0,0,0,0,.23L32.2,39.54a.93.93,0,0,0-.2.38s0,0,0,0l-1.93,8.1a1,1,0,0,0,.33,1,1,1,0,0,0,.64.24,1.14,1.14,0,0,0,.4-.08l7.64-3.32h0a1,1,0,0,0,.36-.27L45,39ZM33.56,42l3.23,2.71-4.32,1.88Zm5,1.58-4.18-3.5L51.44,19.71l4.18,3.51Zm20.1-24L56.9,21.68l-4.17-3.5,1.75-2.09a1.49,1.49,0,0,1,2.09-.18l1.9,1.6a1.49,1.49,0,0,1,.18,2.09Z"
                ></path>
              </svg>`),
        desc: "Built a todo list application using Reactjs wherein you can add and delete todo items and it will show up a confetti whenever a todo item is marked as complete",
        url: "https://ismeet010.github.io/To-do-List-React/",
        code: "https://github.com/ismeet010/To-do-List-React",
      },

      // {
      //   name: "abcd",
      //   icon: createSvgString(""),
      //   desc: "ukgulj",
      //   url: "",
      //   code: "",
      // },
    ];
    

    useEffect(() => {setItem(list[0])
    
        return () => {}
    }, [])

    function getList(list){
        return list.map((listItem) => (
          <li
            key={listItem.name}
            className={listItem.name == item.name ? "about_box list_item active_item" : "about_box list_item" }
            onClick={() => setItem(listItem)}
          >
            <div className="about_title">
              {listItem.name} <span className="picon" dangerouslySetInnerHTML={{ __html: listItem.icon }} />
              
              
            </div>
          </li>
        ));
    }
  return (
    <section className="projects section" id="work">
      <h2 className="section_title">Projects </h2>
      {/* <span className="section_subtitle">........</span> */}
      <div className="projects_container container grid">
        <div className="list">
          <ul>
            {getList(list)}
          </ul>
        </div>
        <Description desc={item.desc} name={item.name} icon={item.icon} url={item.url} code={item.code}/>
      </div>
    </section>
  );
}

export default Projects