import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Navbar({ onLogout }){

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
            }).then(() => onLogout());
        }

    // return(
    //     <div>   
    //         <header>
    //             <button onClick={handleLogout}>Logout</button>
    //         </header>
         
    //         <Link to="/all-about-plants">All About Plants</Link>
    //     </div>
    // )
};

export default Navbar;