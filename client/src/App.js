import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"
import PlantForm from "./components/PlantForm"
import UserProfile from "./components/UserProfile";


export default function App() {
const [currentUser, setCurrentUser] = useState({})

  return (
    <Router>
      <Navbar currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Login onLogin={setCurrentUser} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<UserProfile currentUser={currentUser} />} />
        <Route path="/create-plant" element={<PlantForm setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
}


