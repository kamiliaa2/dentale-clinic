import { Link } from "react-router-dom";
import "./navbar.css";
import { FaHome, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";

const NavBar = () => {
  const nav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About us",
      path: "#about-us",
    },
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Doctors",
      path: "#our-doctors",
    },
    {
      name: "Witnesses",
      path: "#witnesses",
    },
    {
      name: "Contact us",
      path: "#contact-us",
    },
  ];

  const socialMedia = [
    {
      name: "facebook",
      path: "#",
      icon: () => (
        <li>
          <FaFacebook color="white">FaFacebook</FaFacebook>
        </li>
      ),
    },
    {
      name: "instagram",
      path: "#",
      icon: () => (
        <li>
          <FaInstagram color="white">FaInstagram</FaInstagram>
        </li>
      ),
    },
    {
      name: "twitter",
      path: "#",
      icon: () => (
        <li>
          <FaTwitter color="white">FaTwitter</FaTwitter>
        </li>
      ),
    },
  ];
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="contact">
          <TbPhoneCall className="phone-icon" />
          <p>+21305-55-07-18-99</p>
        </div>
        <div className="socialMedia">
          {socialMedia.map((n, index) => {
            return (
              <a key={index} href={n.path}>
                {n.icon()}
              </a>
            );
          })}
        </div>
      </div>

      <div className="navbar-down">
        <div>
          <img src="" alt="logo" />
        </div>
        <div className="navbar-right">
          <nav className="navbar-navs ">
            {nav.map((n, index) => {
              return (
                <a key={index} href={n.path}>
                  <li>{n.name}</li>
                </a>
              );
            })}
          </nav>
          <div className="btns">
            <Link to="/login" className="log-in">
              login
            </Link>
            <Link to="/signup" className="sign-up">
              sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
