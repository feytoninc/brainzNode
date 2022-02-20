import React from "react";
import { socials } from "./Navbar";
import "./css/footer.css"

function Footer() {
  return (
    <footer>
      <div className="info">
        <h2>BRAINZ</h2>
        <p>
          Breaking Barriers & Building Bridges. Inspiring girls and women to be
          successful in every aspect of their lives
        </p>
        <div className="social-buttons">
          <ul>
            {socials.map((social) => {
              return (
                <li key={social.name}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <i className={`fab fa-${social.name}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="links">
        <h2>Our Contact</h2>
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
        <h2>Our Newsletter</h2>
        <p>Receive our updates directly into your inbox</p>
        <form action="#here">
          <input type="email" name="name" id="name" placeholder="Your Name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button className="btn" type="submit" id="form-submit">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
