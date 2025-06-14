import joinus from  "./../images/pkcareers.jpg";
import CareerOpportunities from './CareerOpportunities'

const Career = () => {
  return (
    <div  className="container">
      <div className="imagebk" style={{padding:"20px"}}>
      <img src={joinus} alt="Join Us" className="carrers-img"/>
      <div>
      <h1 className="headings">Join Our Team</h1>
      <p style={{textAlign: "center"}}>Are you looking for a place where your ideas matter, your skills are valued, and your growth is our priority? </p>
      <p style={{textAlign: "center"}}>Welcome to LSWH consulting, where we redefine the standards of software excellence and create an environment where professionals thrive.</p>
      <br></br>
      <p style={{textAlign: "justify"}}>At LSWH consulting, you'll be surrounded by passionate individuals who are committed to industry best practices, cutting-edge technology, and continuous learning—all while working in a space that prioritizes work-life balance and personal development.</p>
      <p style={{textAlign: "justify"}}>If you’re ready to be part of a team that sets the bar high and delivers outstanding solutions, join us today and take your career to the next level. Let’s build the future together!</p>
     </div>
     </div>
     <CareerOpportunities/>
    </div>
  );
};
export default Career;