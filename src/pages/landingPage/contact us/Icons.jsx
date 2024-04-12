import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Icons.css";
const Icons = () => {
  return (
    <div className="icons1">
      <a href="https://www.facebook.com">
        <FaFacebook className="icon1" />
      </a>
      <a href="https://www.instagram.com">
        <FaInstagram className="icon1" />
      </a>
      <a href="https://twitter.com">
        <FaTwitter className="icon1" />
      </a>
    </div>
  );
};

export default Icons;
