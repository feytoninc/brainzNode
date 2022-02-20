import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <nav className="bg-gray shadow-lg">
      <div className="brand px-4 font-extrabold">
        <Link to="/">
          <h2>BRAINZ</h2>
        </Link>
      </div>
      <div className="div nav-toggle mobile">
        <i className="fa fa-bars"></i>
      </div>
      <div className="flex justify-between flex-wrap" id="nav-bar">
        <ul className="nav-items">
          {navsObject.map((nav) => {
            return (
              <li
                key={nav.name}
                className="text-center px-4 py-0 flex align-items-center"
              >
                <Link to={nav.link} className="py-2">
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social pr-4">
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
