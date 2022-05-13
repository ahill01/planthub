import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Navbar({ onLogout,currentUser }){

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
            }).then(() => onLogout());
        }

    return(
        <div className="navLink">
            <Link className="navLink" to="/all-about-plants">All About Plants</Link>
            <Link className="navLink" to="/">Login</Link>
            <Link className="navLink" to="/profile">Profile</Link>
            <Link className="navLink"  to="/create-plant">New Plant</Link>
            <Link className="navLink" to="/edit-plant">Edit Plant</Link>
            <p>{currentUser.id !== undefined ? `welcome to Planthub, ${currentUser.fname}`: null}</p>
        </div>
    )
};

export default Navbar;