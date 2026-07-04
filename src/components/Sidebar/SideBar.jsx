import React from "react";
import { Link } from "react-router-dom";

const topLinks = [
  {
    label: "For You",
    path: "/for-you",
  },
  {
    label: "My Library",
    path: "/library",
  },
  {
    label: "Highlights",
    path: "#",
  },
  {
    label: "Search",
    path: "#",
  },
];

const bottomLinks = [
  {
    label: "Settings",
    path: "/settings",
  },
  {
    label: "Help & Support",
    path: "#",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__logo">

        </div>
        <div className="sidebar__links">
            {topLinks.map((link, index) => (
                <Link key={index} to={link.path} className="sidebar__link">
                    {link.label}
                </Link>
            ))}
        </div>
        <div className="sidebar__bottom">

        </div>
    </div>
      
  );
};

export default Sidebar;