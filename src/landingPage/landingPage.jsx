import React from 'react'


import ContactUs from '../pages/contact us/contact-us'
import Ratingpage from '../pages/rating/Ratingpage'
import Doctors from '../pages/doctors/Doctors'
import ServicesPage from '../pages/srvc/ServicesPage'

import Page1 from '../pages/page1/Page1'


const LandingPage=()=>{
 
  return (
   <main>
   <Page1/>
  
   <ServicesPage/>
   <Doctors/>
   <Ratingpage/>
   <ContactUs/>
    
   
   </main>
  )
}
 export default LandingPage

