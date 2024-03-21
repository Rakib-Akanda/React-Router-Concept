import { Link, NavLink } from "react-router-dom";
import "./Heder.css";
const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
