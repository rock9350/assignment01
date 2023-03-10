import { NavLink } from "react-router-dom";
import "./nav.css"

const Navbar = () => {
    return ( <div id="navBar">
    <NavLink className="home" to="/">Home</NavLink>
    <NavLink className="home" to="/create">Create</NavLink>
    
    </div> );
}
 
export default Navbar;