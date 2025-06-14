import React from "react";
import dev from "./../images/DevHome.png";
/*import dev from "./../images/BizTech Advisory.jpg";
import dev from "./../images/Strategies3.jpg";*/
import ServiceComponenet from "../components/ServiceComponent";

const services = [
  { title: "Web Applications", description: "We build scalable web applications with the latest frameworks, ensuring seamless user experiences and high performance." },
  { title: "Full Stack Development", description: "Our full-stack solutions integrate front-end and back-end technologies to create end-to-end applications tailored to business needs." },
  { title: "Custom & Enterprise Software", description: "We design custom enterprise software that automates business processes, enhances efficiency, and drives digital transformation." },
  { title: "Database Systems", description: "Robust database solutions ensure secure storage, optimized performance, and seamless integration for business applications." },
  { title: "UI/UX Design", description: "Our UI/UX experts craft intuitive and engaging designs that elevate user satisfaction and boost digital interactions." },
  { title: "Mobile Apps", description: "We develop high-performance mobile applications for iOS and Android, ensuring functionality, security, and innovation." },
  { title: "Digital & Cloud Solutions", description: "Our cloud-based solutions leverage modern technologies to enhance scalability, security, and operational efficiency." }
];

const intro = {title:"Application Development", text: "At LSWH Consulting, we design intelligent, scalable software solutions that bridge business goals with technology. With expertise in Full Stack Development, Java, Python, Microsoft Technologies, and Mobile Apps, we deliver secure fintech platforms, AI-powered risk tools, and seamless payment systems for banking and finance. Our insurance tech enhances policy management and fraud detection, while our eCommerce solutions offer personalized experiences and secure gateways. From enterprise web apps to cloud-based analytics, we ensure performance, security, and agility across every build."};
const SoftwareDevelopment = () => {
  return (  
<ServiceComponenet intro={intro} services={services} image={dev}/>
  );
};

export default SoftwareDevelopment;
