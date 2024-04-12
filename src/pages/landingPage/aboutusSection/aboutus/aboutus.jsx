import React from "react";
import { MdMedicalServices } from "react-icons/md";
import { TbCalendarHeart } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import "./aboutus.css"
import { Link } from "react-router-dom";

const Aboutus = () => {
    return (
    <div className="allll" id='about-us'>

       <div className='img1'>
        <img src="about-img.jpg" alt="C:\Users\NetinfoTALI\Desktop\project\public\about-img.jpg" height="600"/>
       
      </div>

      <div className='text'> 
      <h2 className='ph1'>Welcom to our super dental clinic</h2>
      <p className='ph2'>Where expertise meets compassion, 
      and your smile is our priority.</p>
       
       <p className='ph'>We use only best quality materials on the market in order to provide the best products to our patients</p>
       
       <ul className="icon-list">
        <li>
          <LuShieldCheck className="icon"/>
          <p>Top quality dental team</p>
        </li>
        <li>
          <LuShieldCheck className="icon"/>
          <p>State of the art dental treatment</p>
        </li>
        <li>
          <LuShieldCheck className="icon"/>
          <p>Discount on all dental treatment</p>
        </li>
        <li>
          <LuShieldCheck className="icon" />
          <p>Enrollment is quick and easy</p>
        </li>
      </ul>
      <div className='book'>
    <Link to='/login' className='click'>Book an appointement</Link>
    </div>
    </div>
   

      
    </div>

  
  );
};

export default Aboutus;
