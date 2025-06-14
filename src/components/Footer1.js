import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./../styles/Footer.css"; // Import CSS file for styling

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer1;