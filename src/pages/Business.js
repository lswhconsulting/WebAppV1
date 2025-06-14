import React from "react";
import ServiceComponent from "../components/ServiceComponent";
import Bus from "./../images/pkbusiness.jpg";
const services = [
  { title: "Market & Competitive Analysis", description: "Identify emerging tech trends and competitor strategies." },
  { title: "Operational Efficiency", description: "Optimize development workflows and improve software performance." },
  { title: "Digital Transformation", description: "Implement modern solutions like AI, cloud computing, and automation." },
  { title: "Risk Management & Compliance", description: "Ensure cybersecurity, data protection, and regulatory alignment." },
  { title: "Scalable Software Solutions", description: "Develop robust applications that adapt to business growth." }
];

const intro = {title:"Business Consulting", text: "At LSWH Consulting, We combine business expertise with cutting-edge technology to deliver tailored strategies that drive success. Our services help optimize processes, enhance IT infrastructure, and unlock new growth opportunities. Let's turn your vision into reality with smarter, tech-powered solutions. We have dedicated experts in our team with years of experience over large scale projects with in multinational Canadian Banks & IT companies. "};
const Business = () => {
  return (  
<ServiceComponent intro={intro} services={services} image={Bus}/>
  );
};

export default Business;