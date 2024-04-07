import React from 'react';
import  Icons  from './Icons.jsx';
import './Contact.css'
const Contact = () => {
    return (
        <div className='cont'>


            <div className='ct1'>
                <div className="dtc">
              <p className='dentel'>Dental<span>Care</span>  </p>
              </div>
              <div className='ctt-mail'>  
                  <span className='contactt'>Contact</span>
                  <p className='mail'><a href="mailto:DentalCare1800@gmail.com">DentalCare1800@gmail.com</a></p>
              </div>
               <pre>Copyrigt © 2023 DentaCare</pre>
             </div>

            <div className="ct2">
               <div className="txt">
             < span>Based in</span>
             < p>Algiers,<br /> Algeria</p>
             </div>
             <Icons />
            
             </div>

        </div>
    );
}

export default Contact;
