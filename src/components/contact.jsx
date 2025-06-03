import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    const SERVICE_ID = "service_02ja24x";
    const TEMPLATE_ID = "template_mot4y0d";
    const USER_ID = "KGmNs4R4Jy5EtaeUX";
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Aitäh! Teie sõnum on saadetud.");
          clearState();
        },
        (error) => {
          console.error("Failed to send email.", error.text);
          alert("Viga sõnumi saatmisel. Palun proovige uuesti.");
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Leia meid üles</h2>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                  <br />
                  <a
                    className="map-link btn btn-custom btn-lg"
                    aria-label="View larger map"
                    target="_blank"
                    href="https://www.google.com/maps/place/Parking+lot,+Tuha+3e,+11415+Tallinn,+Estonia/@59.4296375,24.7977962,18z/data=!4m6!3m5!1s0x4692ecab36a9c583:0xdba54e8bead8ddcd!8m2!3d59.4295738!4d24.7976624!16s%2Fg%2F11cphdjmlb?hl=en-US&entry=ttu"
                    rel="noopener noreferrer" // For security reasons
                  >
                    Vaata kaardilt
                  </a>
                </p>
              </div>              
              <form name="sentMessage"  validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12"> 
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nimi"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div> 

                <div className="row"> 
                  <div className="col-md-12"> 
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div> 
                <div className="row"> 
                  <div className="col-md-12"> 
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Tekst"
                        required
                        onChange={handleChange}
                        value={message}
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div> 

                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Saada kiri
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Aadress
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefoninumber
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 {" "}
            <a href="https://www.italiens.ee/" rel="nofollow">
              ITALIENS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
