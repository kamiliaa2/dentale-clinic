import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profilepage from "./pages/profilepage/profilepage.jsx";

import Login from "./pages/login/login.jsx";
import RegistrationPage from "./pages/sign up/RegistrationPage.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import Details from "./pages/detailes/Details.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/details" element={<Details />} />
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
