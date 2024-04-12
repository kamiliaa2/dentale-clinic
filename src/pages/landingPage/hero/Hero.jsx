import React from "react";
import { MdMedicalServices } from "react-icons/md";
import { TbCalendarHeart } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const cards = [
    {
      title: "Discover our services",
      subtitle:
        "Discover a comprehensive range of services designed to meet all your dental needs under one roof",
      icon: <MdMedicalServices className="card-icon" />,
      link : "#services",
    },
    {
      title: "Book an appoinetement",
      subtitle:
        "Our friendly staff is here to assist you in booking a convenient time for your visit.",
      icon: <TbCalendarHeart className="card-icon" />,
      link: "#appoinetement",
    },
    {
      title: "Meet our doctors",
      subtitle:
        "Our doctors are here to guide you on your journey to a brighter, healthier smile.",
      icon: <FaUserDoctor className="card-icon" />,
      link: "#our-doctors",
    },
  ];
  return (
    <div className="hero-container">
      <div className="title-container">
        <h2>Creating Brighter Smiles Every Day with </h2>
        <h1>DentalCare Clinic</h1>
        <a href=" login">Book now</a>
        </div>
      <p className="paragraphe">
        Dedicated to Excellence in Dental Health and Patient Satisfaction
      </p>
      
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            {index==1?(<Link to="/login">Click now </Link>): ( <a href={card.link}>Click now</a>)}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
