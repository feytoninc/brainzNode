import React from "react";
import { socials } from "./Navbar";
import "./css/footer.css";

function Footer() {
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <footer>
      <div className="info">
        <h2 className="font-bold">BRAINZ</h2>
        <p className="text-justify">
          Breaking Barriers and Building Bridges. Inspiring girls and women to
          be successful in every aspect of their lives
        </p>
        <div className="social-buttons">
          <ul>
            {socials.map((social) => {
              return (
                <li key={social.name}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <i className={`fab fa-${social.name} fa-lg`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="links">
        <h2 className="font-bold">Our Contact</h2>
        <ul>
          <li>
            <a href="tel:+250784157708">+250784 157 708</a>
          </li>
          <li>
            <a href="mailto:info@brainz.rw">info@brainz.com</a>
          </li>
        </ul>
      </div>
      <div className="form">
        <h2 className="font-bold">Our Newsletter</h2>
        <p>Receive our updates directly into your inbox</p>
        <form onSubmit={handleSubmit}>
          <input type="email" name="name" id="name" placeholder="Your Name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button className="py-2 px-4 rounded-md border-2" type="submit" id="form-submit">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
