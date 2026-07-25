// Carwash\src\Navbar.js

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">
        <span className="logo-black">Shine & </span>
        <span className="logo-orange">Drive</span>
      </h3>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/view">View</Link>
        <Link to="/Service">Service</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/Signup">Signup</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;