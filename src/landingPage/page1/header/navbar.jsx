import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaHome, FaInstagram, FaFacebook, FaTwitter, } from 'react-icons/fa';
import { TbPhoneCall } from "react-icons/tb";

const Navbar = () => {
  const nav = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About us",
      path: "/service"
    },
    {
      name: "Services",
      path: "/srvces"
    },
    {
      name: "Doctors",
      path: "/doctors"
    },
    {
      name: "Witnesses",
      path: "/profile"
    },
    {
      name: "Contact us",
      path: "/me"
    },
  ]
  
  const socialMedia = [
    {
      name: "facebook",
      path: "#",
      icon : () =><li>
        <FaFacebook color='white'>FaFacebook</FaFacebook>
      </li>
    },
    {
      name: "instagram",
      path: "#",
      icon : () =><li>
        <FaInstagram color='white'>FaInstagram</FaInstagram>
      </li>
    },
    {
      name: "twitter",
      path: "#",
      icon : () =><li>
        <FaTwitter color='white'>FaTwitter</FaTwitter>
      </li>}
    ,
  ]
  return (
    
    
    <div className='navbar-container' >
      <div className='navbar-top'>
        <div className='contact'>
        <TbPhoneCall />
          <p>+21305-55-07-18-99</p>
        </div>
        <div>
          <div className='socialMedia'>
          {
              socialMedia.map((n, index) => {
                return (<a href={n.path}>
                    {n.icon()}
                </a>)
              })
            }
          </div>
        </div>
      </div>
      <div className='white-band'></div> {/* Bande blanche */}
      <div className='navbar-middle'>
        <hr className='gray-line' /> {/* Ligne grise */}
      </div>
    
    
      <div className='navbar-container-down'>
        
        <div>
  
          <img src="" alt="logo" />
        </div>
        <div className='navbar-right'>
          <nav className='navbar_navs '>
            {
              nav.map((n, index) => {
                return (<a href={n.path}>
                  <li>
                    {n.name}
                  </li>
                </a>)
              })
            }
          </nav>
          <div className='container'>

            < Link to="/loginn" className='log' >login</Link> 
            <button className='reg'> sign up </button>
            
          </div>
        </div>
      </div>
    </div>
    

  );
};

export default Navbar


