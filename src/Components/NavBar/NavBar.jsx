import "./NavBar.css";
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const NavBar = () => {
  return <div className="navBar">
    <img src={logo} alt="" className="navImg"/>
    <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
    </ul>
    <div className="nav-right">
        <select name="" id="">

            <option value="usd">USD</option>
            <option value="eur">EURO</option>
            <option value="inr">INR</option>
        </select>

        <button>Sign Up <img src={arrow_icon} alt="" /></button>
    </div>
  </div>;
};

export default NavBar;
