import React from "react";
import mobile from "./../images/Mobile6_C.png";
import ServiceComponenet from "../components/ServiceComponent";

const services = [
  { title: "Custom App Development", description: "Build tailored solutions for iOS, Android, and cross-platform environments." },
  { title: "User-Centric Design", description: "Create intuitive and engaging interfaces for seamless user experiences." },
  { title: "Performance Optimization", description: "Ensure smooth functionality with speed, security, and reliability." },
  { title: "AI & IoT Integration", description: "Leverage smart technology for enhanced functionalities and automation." },
  { title: "Cloud-Connected Mobile Apps", description: "Enable seamless data syncing and accessibility across devices." }
];

const intro = {title:"Mobile Development", text: "At LSWH Consulting, We build next-gen mobile apps that boost engagement, streamline operations, and drive innovation. From AI integration to IoT, 5G, and blockchain security, our cross-platform solutions deliver high performance, scalability, and a future-ready mobile experience."};
const Mobile = () => {
  return (  
<ServiceComponenet intro={intro} services={services} image={mobile}/>
  );
};

export default Mobile;