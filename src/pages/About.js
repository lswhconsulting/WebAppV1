import about from "../images/About.png";
import strategies from "../images/Strategies.png";
const About = () => {
    return (
      <div className="container">
        <h1>About Us</h1>
        <p className="box">
          <strong>SHR Technologies Inc.</strong> is a leading provider of software consulting and application 
          development services. With a team of experienced professionals, we help businesses navigate 
          digital transformation and achieve operational excellence.

          We provide highly skilled software professionals to support multi-level companies in achieving their technology goals.
          Our experts bring deep industry knowledge, technical excellence, and innovative solutions to drive success across diverse sectors. 
          Whether you need specialized talent for development, system integration, or cloud transformation,
           we deliver top-tier professionals tailored to your unique business needs.
        </p>
        <h2>What We Follow?</h2>
        <div className="box">
        <p>
          We follow a structured and agile approach to consulting and development:
        </p>
        <ul >
          <li><strong>Consultation & Analysis:</strong> Understanding client needs and objectives.</li>
          <li><strong>Custom Solutions:</strong> Designing and developing software tailored to business needs.</li>
          <li><strong>Implementation & Integration:</strong> Seamlessly deploying solutions within existing systems.</li>
          <li><strong>Continuous Support:</strong> Ensuring long-term success with maintenance and updates.</li>
        </ul>
        </div>
        <h2>Why Choose Us?</h2>
        <p className="box">
          Our expertise spans across multiple industries, helping businesses optimize processes, reduce costs, 
          and accelerate growth through innovative software solutions.
          Our team of experts leverages cutting-edge technologies, AI-driven insights, and agile methodologies to develop customized solutions tailored to each industry's unique challenges. By fostering collaboration and innovation, we empower businesses to enhance efficiency, streamline workflows, and achieve sustainable growth in an ever-evolving digital landscape
        </p>
  
        <img src={about} alt="Company Overview" style={{padding:"5%",width:"35%"}} className="image" />
        <img src={strategies} alt="Working Strategy" style={{padding:"5%",width:"35%"}} className="image" />
      </div>
    );
  };

  
  export default About;