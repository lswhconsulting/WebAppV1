import React from "react";
import ServiceComponenet from "../components/ServiceComponent";
import img from "./../images/DataHive.jpg";
const services = [
  { title: "Cloud Migration & Modernization", description: "Seamlessly transition to cloud environments while minimizing downtime." },
  { title: "Infrastructure Optimization", description: "Improve resource allocation for cost-effective cloud usage." },
  { title: "Security & Compliance", description: "Ensure data protection with industry-leading security measures." },
  { title: "AI & Automation in Cloud", description: "Leverage AI-driven insights for intelligent cloud computing." },
  { title: "Multi-Cloud & Hybrid Solutions", description: "Customize cloud architectures for flexible deployments." }
];

const intro = {title:"Cloud Solutions", text: "At LSWH Consulting, We deliver tailored cloud solutions that drive scalability, security, and efficiency. From migration to cloud-native development, our strategies streamline operations, reduce costs, and accelerate digital transformation—empowering your business to grow smarter in a dynamic tech landscape."};
const CloudSolutions = () => {
  return (  
<ServiceComponenet intro={intro} services={services} image={img}/>
  );
};

export default CloudSolutions;