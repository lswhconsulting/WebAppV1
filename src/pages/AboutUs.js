import about from "../images/Strategies3.jpg";
import strategies from "../images/Strategies2.png";
import joinus from  "./../images/pkaboutus.jpeg";
import about2 from "../images/about2.png";
import Features from "./Features";
const About = () => {
    return (
    <div  className="container">
      <div className="imagebk">
      <img src={joinus} alt="Join Us" className="carrers-img feature-box"/>
      <div style={{padding:"0px 0px 20px 20px"}}>
        <h1 className="headings">About Us</h1>
        <p className="para1" >
          <strong>At LSWH Consulting Inc.</strong> we're not just consultants – we're your partners in navigating the complex world of financial technology. 
          As born from a vision to bridge the gap between your business and cutting-edge technology. 
          We understand the unique challenges faced by businesses in today's rapidly evolving digital landscape.
        </p><p className="para1">
          "Our mission is simple" To equip our clients with the resources, expertise, and innovative, cost-efficient solutions they need to excel in today's dynamic financial landscape.
        </p>
        <p  className="para1">
            We build AI-powered applications tailored for the banking and finance industry to drive scalability and efficiency.Our AI-driven solutions help financial institutions innovate, automate, and expand operations seamlessly.
            By integrating advanced AI technologies, we empower banking and finance firms to optimize workflows and enhance customer experiences.</p>
        </div>
        </div>
    {/*}  <div className="imagebk">
      <div style={{padding: "20px"}}>
        <h1 className="headings" style={{margin: "0px"}}>What We Follow?</h1>
        <p style={{textAlign:"justify"}} >
          Strategies are crucial to ensure innovation, efficiency, and customer satisfaction.
          We follow a structured and agile approach to consulting and development:
        </p>
        <div className="small-box-container">
        <div className="small-box">
        <h3>Consultation & Analysis</h3>
        <ul className="ui-class">
        <li>Understanding client needs and objectives.</li>
        <li>Conducting market research and feasibility studies.</li>
        <li>Identifying opportunities for digital transformation.</li>
        </ul>
        </div>
        <div className="small-box">
        <h3>Custom Solutions</h3>
        <ul className="ui-class">
        <li>Designing and developing software tailored to business needs.</li>
        <li>Developing scalable and future-proof applications.</li>
        <li>Using cutting-edge technology to enhance business efficiency</li>
        </ul>
        </div></div>
        <div className="small-box-container">
        <div className="small-box">
        <h3>Implementation & Integration</h3>
        <ui  className="ui-class">
        <li>Seamlessly deploying solutions within existing systems.</li>
        <li>Ensuring compatibility with third-party tools and platforms.</li>
        <li>Providing comprehensive training and onboarding for users.</li>
        </ui>
        </div>
        <div className="small-box">
        <h3>Continuous Support</h3>
        <ui  className="ui-class"><li>Ensuring long-term success with maintenance and updates.</li>
        <li>Monitoring performance and ensuring security compliance.</li>
        <li>Adapting solutions to evolving industry trends.</li>
        </ui>
        </div>
        </div>
        </div>
          <img src={about} style={{padding:"20px",height:"auto"}} alt="Join Us" className="carrers-img feature-box"/>
        </div>*/}
        <div style={{padding:"20px"}}>
        <h1 className="headings">Why Choose Us?</h1>
        <p className="para1">
          Our expertise spans across multiple industries, helping businesses optimize processes, reduce costs, 
          and accelerate growth through innovative software solutions.
          Our team of experts leverages cutting-edge technologies, AI-driven insights, and agile methodologies to develop customized solutions tailored to each industry's unique challenges. By fostering collaboration and innovation, we empower businesses to enhance efficiency, streamline workflows, and achieve sustainable growth in an ever-evolving digital landscape
        </p>
        <Features/>
     </div>
      </div>
    );
  };

  
  export default About;