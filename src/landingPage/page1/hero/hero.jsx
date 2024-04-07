import React from 'react';
import { MdMedicalServices } from "react-icons/md";
import { TbCalendarHeart } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import './hero.css';

const Hero = () => {
  return (
  
    <div className="container">

    <img src="image 19 (1).png" alt="C:\Users\NetinfoTALI\Desktop\project\public\image 19 (1).png"  height="600"/>
     <div className="overlay">
      <p className='title1'>Creating Brighter Smiles Every Day with</p>
      <p className='title2'>DentalCare Clinic</p>
      <button className='btn'>Look Now</button>
      < p className='title3'>Dedicated to Excellence in Dental Health and Patient Satisfaction</p> 
      <div className='boxes'>

      <div className='box1'>
      <div className='cyrcle'>
        <div className='icons'><MdMedicalServices  />
        </div>
        </div> 
      <p className='titre'>Discover our services</p>
      <p className='soustitre'> Discover a comprehensive range of services designed to meet all your dental needs under one roof</p>
      <Link to="/srvces" className='click'>click</Link>
     </div>
     
     <div className='box2'>
      <div className='cyrcle'>
        <div className='icons'><TbCalendarHeart className='icons' /></div>
      
       </div> 
      <p className='titre'>Book an appoinetement</p>
      <p className='soustitre2'>   Our friendly staff is here to assist you in booking a convenient time for your visit.</p>
       <a href="#" className='click'>click</a>
     </div>
     <div className='box3'>
      <div className='cyrcle'>
        <div className='icons'><FaUserDoctor  /></div>
     
      </div> 
      <p className='titre'>Meet our doctors</p>
      <p className='soustitre3'>  Our doctors are here to guide you on your journey to a brighter, healthier smile. </p>
      <a href="#" className='click'>click</a>
         
     </div>
     


     </div>


    </div>

    <div className='blue'>
      <div className='text'> 
      <h2 className='ph1'>Welcom to our super dental clinic</h2><br />
      <p className='ph2'>Where expertise meets compassion, 
      and your smile is our priority.</p>
       <div className='liste'>
       <p className='ph3'>We use only best quality materials on the market in order to provide the best products to our patients</p>
       
       </div>

      </div>
      <div className='list'>
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
    </div>
    <div className='book'>
    <a href="#" className='click'>Book an appointement</a>
    </div>
   
      <div className='img1'>
        <img src="about-img.jpg" alt="C:\Users\NetinfoTALI\Desktop\project\public\about-img.jpg" height="600"/>
       
      </div>
      
     
           
     
        
     
    
    </div>
    
      
      
      
      
    
  </div>
   
      
    
     
  

      
   


   
  
    
    
   
 
  
  
     
  );
};

export default Hero;




