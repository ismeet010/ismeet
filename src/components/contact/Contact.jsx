import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_u0qt1w7",
          "template_u98zqed",
          form.current,
          "B_BH7qVsLfR1UTJrx"
        )
        e.target.reset();
    };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      {/* <span className="section_subtitle">Contact Me</span> */}
      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Reach out to me</h3>
          <div className="contact_info">
            <div className="contact_card">
              <h3 className="contact_card_title">
                {" "}
                Email{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 64 64"
                  viewBox="0 0 64 64"
                  id="email"
                  className="picon"
                >
                  <polygon
                    fill="#fbb553"
                    points="8.4 20.7 8.4 30.1 2.5 25.5"
                  ></polygon>
                  <path d="M64,25.5c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1-0.1-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0l-0.1-0.1c0,0,0,0,0,0l-8.1-6.6V7.6c0-0.5-0.4-1-1-1H41.3l-5.4-4.4c-2.3-1.8-5.5-1.8-7.8,0l-5.4,4.4H9.4c-0.5,0-1,0.4-1,1v10.7l-8.1,6.6c0,0,0,0,0,0.1c0,0,0,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.2c0,0,0,0,0,0v36.6c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0C0.4,63,0.5,63,0.6,63.1c0,0,0,0,0.1,0c0.1,0,0.2,0.1,0.3,0.1H63c0.1,0,0.2,0,0.3-0.1c0,0,0,0,0.1,0c0.1,0,0.2-0.1,0.3-0.2c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1L64,25.5C64,25.5,64,25.5,64,25.5z M55.6,20.7l5.9,4.8l-5.9,4.5V20.7z M29.3,3.7c1.6-1.3,3.8-1.3,5.4,0l3.5,2.9H25.8L29.3,3.7z M10.4,8.5h43.3v23L37.1,44.3H26.9L10.4,31.6V8.5z M8.4,20.7v9.3l-5.9-4.5L8.4,20.7z M1.9,27.5l22.9,17.7L1.9,60.4V27.5z M4.2,61.2l22.7-15h10.3l22.7,15H4.2z M62.1,60.4L39.1,45.2l22.9-17.7V60.4z"></path>
                  <path
                    fill="#d5d6d5"
                    d="M10.4,8.5v23l16.5,12.7h10.2l16.5-12.7v-23H10.4z M47,33.4H17c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1H47c0.5,0,1,0.4,1,1C47.9,32.9,47.5,33.4,47,33.4z M47,27.3H17c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1H47c0.5,0,1,0.4,1,1C47.9,26.9,47.5,27.3,47,27.3z M47,21.2H17c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1H47c0.5,0,1,0.4,1,1C47.9,20.8,47.5,21.2,47,21.2z M47,15.2H17c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1H47c0.5,0,1,0.4,1,1C47.9,14.8,47.5,15.2,47,15.2z"
                  ></path>
                  <polygon
                    fill="#edeced"
                    points="12.3 8.5 12.3 33.1 10.4 31.6 10.4 8.5"
                  ></polygon>
                  <polygon
                    fill="#bfbebc"
                    points="51.7 8.5 51.7 33.1 53.6 31.6 53.6 8.5"
                  ></polygon>
                  <polygon
                    fill="#5acaf4"
                    points="59.8 61.2 4.2 61.2 26.8 46.2 37.2 46.2"
                  ></polygon>
                  <polygon
                    fill="#36a1cf"
                    points="59.8 61.2 4.2 61.2 6.1 59.9 57.9 59.9"
                  ></polygon>
                  <polygon
                    fill="#43b4dc"
                    points="57.9 59.9 6.1 59.9 10.1 57.3 53.9 57.3"
                  ></polygon>
                  <polygon
                    fill="#5acaf4"
                    points="62.1 27.5 62.1 60.4 39.1 45.2"
                  ></polygon>
                  <polygon
                    fill="#fbb553"
                    points="61.5 25.5 55.6 30.1 55.6 20.7"
                  ></polygon>
                  <polygon
                    fill="#e8932f"
                    points="61.5 25.5 60.5 26.2 55.6 22.2 55.6 20.7"
                  ></polygon>
                  <polygon
                    fill="#f1a444"
                    points="60.5 26.2 58.9 27.5 55.6 24.8 55.6 22.2"
                  ></polygon>
                  <polygon
                    fill="#e8932f"
                    points="2.5 25.5 3.4 26.2 8.4 22.2 8.4 20.7"
                  ></polygon>
                  <polygon
                    fill="#f1a444"
                    points="3.4 26.2 5.1 27.5 8.4 24.8 8.4 22.2"
                  ></polygon>
                  <polygon
                    fill="#5acaf4"
                    points="24.9 45.2 1.9 60.4 1.9 27.5"
                  ></polygon>
                  <polygon
                    fill="#36a1cf"
                    points="3.5 28.7 3.5 59.4 1.9 60.4 1.9 27.5"
                  ></polygon>
                  <polygon
                    fill="#43b4dc"
                    points="7.2 31.5 7.2 56.9 3.5 59.4 3.5 28.7"
                  ></polygon>
                  <polygon
                    fill="#36a1cf"
                    points="60.5 28.7 60.5 59.4 62.1 60.4 62.1 27.5"
                  ></polygon>
                  <polygon
                    fill="#43b4dc"
                    points="56.8 31.5 56.8 56.9 60.5 59.4 60.5 28.7"
                  ></polygon>
                  <path
                    fill="#fbb553"
                    d="M38.2,6.6H25.8l3.5-2.9c1.6-1.3,3.8-1.3,5.4,0L38.2,6.6z"
                  ></path>
                  <path
                    fill="#e8932f"
                    d="M38.2,6.6H37l-2.4-1.9c-1.5-1.3-3.8-1.3-5.3,0L27,6.6h-1.2l3.5-2.9c1.6-1.3,3.8-1.3,5.4,0L38.2,6.6z"
                  ></path>
                  <path
                    fill="#f1a444"
                    d="M37,6.6h-2l-0.4-0.3c-1.6-1.3-3.8-1.3-5.4,0L29,6.6h-2l2.3-1.9c1.6-1.3,3.8-1.3,5.3,0L37,6.6z"
                  ></path>
                  <path d="M47.9 14.2c0 .5-.4 1-1 1H17c-.5 0-1-.4-1-1 0-.5.4-1 1-1H47C47.5 13.2 47.9 13.7 47.9 14.2zM47.9 20.3c0 .5-.4 1-1 1H17c-.5 0-1-.4-1-1 0-.5.4-1 1-1H47C47.5 19.3 47.9 19.7 47.9 20.3zM47.9 26.3c0 .5-.4 1-1 1H17c-.5 0-1-.4-1-1 0-.5.4-1 1-1H47C47.5 25.4 47.9 25.8 47.9 26.3zM47.9 32.4c0 .5-.4 1-1 1H17c-.5 0-1-.4-1-1 0-.5.4-1 1-1H47C47.5 31.4 47.9 31.8 47.9 32.4z"></path>
                </svg>
              </h3>

              <a href="" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>
            <div className="contact_card">
              <h3 className="contact_card_title">
                {" "}
                Linkedin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 100 100"
                  viewBox="0 0 100 100"
                  id="linkedin"
                  className="picon"
                >
                  <g>
                    <path
                      fill="#0077b5"
                      d="M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381
			c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z"
                    ></path>
                    <path
                      fill="#f1f1f1"
                      d="M53.453 82.005c0 0 0-23.878 0-23.879-.139-4.388 2.484-8.483 7.762-8.667 5.143 0 7.201 3.921 7.201 9.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247-7.668 0-11.036 4.285-12.907 7.204l.095-6.2H39.239c.185 4.012-.001 42.763-.001 42.763L53.453 82.005zM31.37 63.461v-24.22H17.154v42.763h14.217C31.368 77.514 31.376 67.888 31.37 63.461zM24.265 33.404c4.956 0 8.042-3.284 8.042-7.387-.041-9.897-16.004-9.787-15.991-.001C16.305 30.151 19.476 33.455 24.265 33.404z"
                    ></path>
                  </g>
                </svg>
              </h3>
              <span className="contact_card_data"></span>

              <a href="" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">Write to me</h3>
          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="contact_form_div">
              <label className="contact_form_tag"> Name</label>
              <input
                type="text"
                name="name"
                className="contact_form_input"
                placeholder="Enter your name"
              />
            </div>
            <div className="contact_form_div">
              <label className="contact_form_tag"> Email</label>
              <input
                type="email"
                name="email"
                className="contact_form_input"
                placeholder="Enter your email"
              />
            </div>
            <div className="contact_form_div contact_form_area">
              <label className="contact_form_tag"> Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="contact_form_input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="button button_flex">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--container-color)"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
