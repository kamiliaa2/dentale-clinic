import React from "react";

import Ratingpage from "./rating/Ratingpage";
import Doctors from "./doctors/Doctors";
import ContactUs from "./contact us/contact-us";
import NavBar from "./navbar/NavBar";
import Hero from "./hero/Hero";
import ServicesSection from "./srvc/ServicesSection";
import AboutusSection from "./aboutusSection/aboutusSection";

const LandingPage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <AboutusSection />
      <ServicesSection />
      <Doctors />
      <Ratingpage />
      <ContactUs />
    </main>
  );
};
export default LandingPage;
