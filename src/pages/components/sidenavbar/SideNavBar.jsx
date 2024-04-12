import React from "react";
import { TbListDetails } from "react-icons/tb";
import { PiCalendarCheckBold } from "react-icons/pi";
import { TbCalendarDown } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import "./sidenavbar.css";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SideNavBar = () => {
  const routes = [
    {
      name: "profile",
      icon: <VscAccount />,
      path: "/profile",
    },
    {
      name: "details",
      icon: <TbListDetails />,
      path: "/details",
    },
    {
      name: "Book appoinetement",
      icon: <PiCalendarCheckBold />,
      path: "/book-appointment",
    },
    {
      name: "View Booking",
      icon: <TbCalendarDown />,
      path: "/view-booking",
    },
    {
      name: "Logout",
      icon: <CiLogout />,
      path: "/",
    },
  ];
  const pathName = useLocation().pathname;

  return (
    <div className="page">
      <div className="sidebar">
        <div className="menu">
          {routes.map((route, index) => (
            <li key={index} className={pathName === route.path ? "active" : ""}>
              <Link to={route.path}>
                <i>{route.icon}</i>
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
