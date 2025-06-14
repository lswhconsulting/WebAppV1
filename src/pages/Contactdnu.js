import React, { useState } from "react";
import "./../styles/Contact.css";
import watsapp from "./../images/whatsapp.png";
import facebook from "./../images/facebook.png";
import linkedin from "./../images/linkedin.png";
import twitter from "./../images/twitter.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);
      setFormData({ name: "", email: "", phone: "", description: "" });

      setTimeout(() => {
        setMessage("");
      }, 10000);
    } catch (error) {
      setMessage("Error submitting form. Please try again.");

      setTimeout(() => {
        setMessage("");
      }, 10000);
    }
  };

  // Social Media Share Links
  const shareText = encodeURIComponent("Reach out to SHR Technologies for more information!");
  const shareUrl = encodeURIComponent("https://www.shrtechnologies.com");

  const whatsappLink = `https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`;
  const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  return (
    <div className="container contact-wrapper">
      <div className="contact-container">
        <h2>Contact Us</h2>
        {message && <div className="popup-message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="description" placeholder="Your Message" value={formData.description} onChange={handleChange} required />
          <button className="btn-contact" type="submit">Submit</button>
        </form>
      </div>

      {/* Embedded Google Maps iframe */}
      <div className="map-container">
        <div className="">
         <h3>Registered Office</h3><p class="para2"> 20 Haslemere Avenue, Brampton, ON, L6W 2X4.</p>
     <h3>Corporate Office</h3><p class="para2"> 72, 145 1/2 Church Street, Unit # 5, Toronto, ON, M5B 1Y4.</p>
          {/* Social Media Links */}
        <div className="social-links">
          <p>Share on:</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><img src={watsapp} alt="WhatsApp" className="img"/></a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="img"/></a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className="img"/></a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" className="img"/></a>
        </div>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7267755823386!2d-79.3757067!3d43.6538526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb340e10b9db%3A0x4524b0f330fe595f!2s145%201%2F2%20Church%20St%20unit%205%2C%20Toronto%2C%20ON%20M5B%201Y4!5e0!3m2!1sen!2sca!4v1749398014701!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
