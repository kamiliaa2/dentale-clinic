import React from 'react';
import { TbListDetails } from "react-icons/tb";
import { PiCalendarCheckBold } from "react-icons/pi";
import { TbCalendarDown } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";

import './nav.css';

const Nav = () => {
  return (
  
 <div className='page'>
<div className='sidebar'>
 
     <div className='menu'>
       <li className='active'> 
        <a href="" >
        <i><TbListDetails /></i>
          <span>details</span>
        </a>
       </li>
       <li> 
        <a href="">
        <i><PiCalendarCheckBold /></i>
          <span>Book appoinetement</span>
        </a>
       </li>
       <li> 
        <a href="">
        <i><TbCalendarDown /></i>
          <span>View Booking</span>
        </a>
       </li>
       <li className='logout'> 
        <a href="">
        <i><CiLogout  /></i>
          <span>Logout</span>
        </a>
       </li>

    

  </div>
  
</div>
</div>
  );
};

export default Nav;