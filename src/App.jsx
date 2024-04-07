import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

import Profilepage from './pages/profilepage/profilepage.jsx';
import Page2 from './pages/page2/page2.jsx';

import Navbaresideeee from './pages/navbaresideeee/navbareside.jsx';
import Page1 from  './pages/page1/Page1.jsx';
import ContactUs from './pages/contact us/contact-us.jsx';

import Ourdoctors from './pages/doctors/ourdoctors.jsx';
import Login from './pages/login/login.jsx';
import ServicesPage from './pages/srvc/ServicesPage.jsx';
import RegistrationPage from './pages/sign up/RegistrationPage.jsx';
import RatingPage from './pages/rating/Ratingpage.jsx';
import LandingPage from './landingPage/landingPage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<Page1 />} />
        <Route path="/history" element={<Page2 />} />
        <Route path="/profile" element={<Profilepage/>} />
        <Route path="/nav" element={<Navbaresideeee/>} />
        <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/doctors' element={<Ourdoctors/>}/>
          <Route path='/srvces' element={<ServicesPage/>}/>
          <Route path='/sign up' element={<RegistrationPage/>}/>
          <Route path='/rating' element={<RatingPage/>}/>
          <Route path='/loginn' element={<Login/>}/>
          <Route path='/landing' element={<LandingPage/>}/>

            
         
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
