import {Link} from "react-router-dom";

function Navbar({currentUser, setCurrentUser}){

    function handleLogout() {
        // debugger;
        fetch("/logout", {
            method: "DELETE",
            }).then(setCurrentUser({}))
        }

    return(
        <div className="navLink">
            <Link className="navLink" to="/" onClick={handleLogout}>{currentUser.id !== undefined ? "Logout": "Login"}</Link>
            <Link className="navLink" to="/profile">Profile</Link>
            <Link className="navLink"  to="/create-plant">New Plant</Link>
            <Link className="navLink" to="/edit-plant">Edit Plant</Link>
            <p>{currentUser.id !== undefined ? `Welcome to Planthub, ${currentUser.fname}`: null}</p>
        </div>
    )
};

export default Navbar;