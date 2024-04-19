import React from "react";
import { SlLocationPin } from "react-icons/sl";

import Contact from "./Contact";

import "./contact-us.css";
const ContactUs = () => {
  return (
    <div className="bodyy-cnt" id="contact-us">
      <div className="all-cnt">
        <div className="textt-cnt">
          <h1>
            Welcome to our <br /> community!
          </h1>
          <p className="p1-cnt">
            Start your new journey with us and join our community
          </p>
          <h2>
            Get in touch <br />
            We want to share our location <br />
            to find us easily.
          </h2>

          <div className="adr-cnt">
            <SlLocationPin className="location-cnt" />
            <p>
              <b>Office Address </b> <br />
              74A High Road, Wanstead, London, E11 7RJ
            </p>
          </div>
        </div>

        <div className="login-cnt">
          <h1>Enter your email</h1>
          <div className="gmail-cnt">
            <hr />
            <img src="/gmail.png" alt="gmail" />
            <hr />
          </div>
          <div className="fullname-cnt">
            <div className="name-cnt">
              <label htmlFor="name">name</label>
              <br />
              <input type="inputt" id="name" placeholder="Enter your name" />
            </div>

            <div className="surname-cnt">
              <label htmlFor="surname">surname</label>
              <br />
              <input
                className="inputt-cnt"
                id="surname"
                placeholder="Enter your surname"
              />
            </div>
          </div>

          <div className="email-cnt">
            <label htmlFor="email">email</label>
            <br />
            <input type="email" id="email" placeholder="Enter your email ID" />
            <br />
            <input type="inputt" id="mssg" placeholder="Send us a message!" />
          </div>

          <div className="btnn-cnt">
            <button className="submit-cnt">Contact us </button>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactUs;
