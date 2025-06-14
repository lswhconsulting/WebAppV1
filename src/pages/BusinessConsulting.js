import React from "react";
import "./../styles/BusinessConsulting.css";
import Bus from "./../images/Bus110.png";

const HighlightBox = ({ title, description }) => {
  return (
    <div className="highlight-box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const BusinessConsulting = () => {
  return (
    <div class="container">
    <div className="business-consulting">
      {/* Image Section */}
      <div className="image-section">
        <img src={Bus} alt="Business Consulting" />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h1>Software Business Consulting</h1>
        <p>
          At SHR Technologies Inc., we empower businesses with technology-driven solutions that enhance efficiency, scalability, and innovation. Our approach is built on industry expertise, ensuring that companies receive the right software solutions to meet their evolving needs.

          We specialize in helping businesses scale with the right software solutions.
          Our team offers strategic insights to optimize workflows, improve efficiency,
          and leverage the latest technology innovations. Whether it's cloud transformation,
          AI-driven solutions, or custom software development, we guide you at every step.
          Elevate your business with expert consulting today.
        </p>
      </div>

      {/* Highlight Boxes Section */}
      <div className="boxes-section">
        <HighlightBox title="Cloud Solutions" description="Optimize your business with cloud-based infrastructure." />
        <HighlightBox title="AI Integration" description="Leverage AI-driven insights for data-driven decision-making." />
        <HighlightBox title="Custom Development" description="Get tailor-made software solutions for your specific needs." />
      </div>
    </div>
    </div>
  );
};

export default BusinessConsulting;