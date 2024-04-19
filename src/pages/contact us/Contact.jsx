import React from "react";
import Icons from "./Icons.jsx";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="cont-cnt">
      <div className="ct1-cnt">
        <div className="dtc-cnt">
          <p className="dentel-cnt">
            Dental<span>Care</span>{" "}
          </p>
        </div>
        <div className="ctt-mail-cnt">
          <span className="contactt-cnt">Contact</span>
          <p className="mail-cnt">
            <a href="mailto:DentalCare1800@gmail.com">
              DentalCare1800@gmail.com
            </a>
          </p>
        </div>
        <pre>Copyrigt © 2023 DentaCare</pre>
      </div>

      <div className="ct2-cnt">
        <div className="txt-cnt">
          <span>Based in</span>
          <p>
            Algiers,
            <br /> Algeria
          </p>
        </div>
        <Icons />
      </div>
    </div>
  );
};

export default Contact;
