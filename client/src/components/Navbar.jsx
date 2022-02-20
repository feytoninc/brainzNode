import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/nav.css";

export const socials = [
  { name: "facebook", link: "https://web.facebook.com/Beautifulbrainz" },
  { name: "twitter", link: "https://twitter.com/BeautifulBrainx" },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/beautiful-brainz/",
  },
  { name: "instagram", link: "https://www.instagram.com/beautiful_brainz1/" },
];
function Navbar() {
  const navsObject = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "BBHUB", link: "/bbhub" },
  ];
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="bg-gray shadow-lg md:overflow-hidden">
      <div className="brand px-4 font-extrabold">
        <Link to="/">
          <h2>BRAINZ</h2>
        </Link>
      </div>
      <div
        className="sm:hidden xs:block absolute right-0 top-0 px-3 p-y2"
        onClick={handleOpen}
      >
        {isOpen ? (
          <i className="fa fa-close fa-lg"></i>
        ) : (
          <i className="fa fa-bars fa-lg"></i>
        )}
      </div>
      <div
        className="sm:flex sm:justify-between sm:flex-wrap xs:block"
        id="nav-bar"
      >
        <ul className="nav-items xs:block">
          {navsObject.map((nav) => {
            return (
              <li
                key={nav.name}
                className="text-center flex align-items-center"
              >
                <NavLink
                  to={nav.link}
                  className={
                    "px-4 flex align-center " +
                    ((navData) => (navData.isActive ? " active" : " none"))
                  }
                >
                  {nav.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social pr-4 xs:block">
        {socials.map((social) => {
          return (
            <li key={social.name} className="mx-1 flex align-middle">
              <a href={social.link} target="_blank" rel="noreferrer">
                <i className={`fab fa-${social.name}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
