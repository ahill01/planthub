import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"
import PlantForm from "./components/PlantForm"
import UserProfile from "./components/UserProfile";


export default function App() {
const [userPlants, setUserPlants] = useState([])
const [currentUser, setCurrentUser] = useState({})
useEffect(() => {
  fetch('/users') 
  .then(res => res.json())
  .then(user => {
    setCurrentUser(user[0])
    setUserPlants(user[0].plants)
  })
},[])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<UserProfile plants={userPlants} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/create-plant" element={<PlantForm />} />
      </Routes>
    </Router>
  );
}


