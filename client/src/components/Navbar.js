import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Navbar(){

    return(
        <div>
            <Link to="/all-about-plants">All About Plants</Link>
            <Link to="/">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/create-plant">New Plant</Link>
        </div>
    )
};

export default Navbar;