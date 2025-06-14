import React, { useState } from "react";

const jobOpportunities = [
  {
    title: "Software Developer (Java, ReactJS, Oracle)",
    description: "Expertise in Java, ReactJS, Oracle,Spring Boot, Spring Security, Spring Batch.",
  },
  {
    title: "Software Developer (Python & Databases)",
    description: "Experience in Python, Oracle, MS-SQL, Postgres, and Airflow.",
  },
  {
    title: "Business Analyst (Banking & Risk Management)",
    description: "Expert in Banking industry, Risk Management, and financial regulations.",
  },
  {
    title: "Project Manager (Banking & Finance)",
    description: "Lead development teams in Banking & Finance sector.",
  }
];

const CareerOpportunities = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hr@yourcompany.com?subject=Job Application&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="career-container">
      <p>Explore career opportunities at LSWH Consulting and apply to be part of our dynamic team.</p>
      <h2>Current Openings</h2>

      <div className="job-list" style={{paddingBottom:"8%"}}>
        {jobOpportunities.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button onClick={() => setShowForm(true)}>Apply Now</button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-container" style={{paddingBottom:"10%", padding:"20px"}}>
          <h3>Application Form</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CareerOpportunities;