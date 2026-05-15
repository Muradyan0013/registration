import { NavLink } from "react-router-dom";
import "./navigationMenu.css"
export const NavigationMenu = () => {
  return (
    <div className="navigationMenu">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/signup"}>Sign Up</NavLink>
        <NavLink to={"/login"}>Log In</NavLink>
      </nav>
    </div>
  );
};
