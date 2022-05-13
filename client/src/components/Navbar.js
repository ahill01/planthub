import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Navbar({ onLogout }){

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
            }).then(() => onLogout());
        }

    return(
        <div className="links">
            <Link to="/all-about-plants">All About Plants</Link>
            <Link to="/">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/create-plant">New Plant</Link>
            <Link to="/edit-plant">Edit Plant</Link>

        </div>
    )
};

export default Navbar;