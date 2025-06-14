import { Link } from "react-router-dom";
import logo from  "./../images/SHRTech_logo1.png";
import small from  "./../images/SHRTech_logo_small.png";
const Header = () => {
  return (
    <header>
    {/*}  <picture>
  <source srcset={small} media="(max-width: 600px)"/>
  <source srcset={logo} media="(max-width: 1500px)"/>
  <source srcset={logo}/>
  <img src={logo} alt="SHR Technologies Inc." className="image"/>
</picture> */}
   <img src={small} alt="SHR Technologies Inc." className="image"/>
      <nav>
        <Link className='ahref' to="/">Home</Link>
        <Link className='ahref' to="/about">About Us</Link>
        <Link className='ahref' to="/services">Services</Link>
        <Link className='ahref' to="/career">Career</Link>
        <Link className='ahref' to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;