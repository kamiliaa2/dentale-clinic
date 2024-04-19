import React from "react";

import "./profile.css";
import SideNavBar from "../../components/sidenavbar/SideNavBar";

const Profile = () => {
  return (
    <div className="pagep">
      <SideNavBar />
      <div className="cntnr">
        <div className="profilee">
          <h1>LLLLLLLL</h1>
        </div>
        <div className="my-profile">
          <h1>my peofile</h1>
          
          <hr />

          <div className="formulaire">
        
            <div className="infos">
              <div className=" image-container">
              <img
                src="Rectangle 499.png"
                alt="C:\Users\NetinfoTALI\Desktop\project\public\Rectangle 499.png"
                width={300}
                height={360}
              />
              </div>
              <div className=" contacts-infos">
              <h2>Contact Information</h2>
              <div className=" infos-fields">
                <ul className="contactinf">
                  <li> <strong>Age:</strong> 26yo</li>
                  <li><strong>Gender:</strong> Female</li>
                  <li><strong>Birthday:</strong> 21 August, 1997</li>
                  <li><strong>Civil Status:</strong> Single</li>
                </ul>
                <div className="occupation">
                <ul >
                  <li><strong>Occupation:</strong> HR Manager</li>
                <li>
                  <strong>Mobile:</strong> 0555051625
                </li>
                <li>
                  <strong>Email:</strong> yaraexemple@gmail.com
                </li>
                <li>
                  <strong>Address:</strong> Algiers, Ouled Fayet
                </li>
              </ul>
                </div>
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
