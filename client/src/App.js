import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import AllAboutPlants from "./components/AllAboutPlants";
import Navbar from "./components/Navbar"
import NewUserForm from "./components/NewUserForm"
import NewPlantForm from "./components/NewPlantForm"
import UserProfile from "./components/UserProfile";


export default function App() {
const [userPlants, setUserPlants] = useState([])

useEffect(() => {
  fetch('/users') 
  .then(res => res.json())
  .then(user => {
    console.log(user)
    setUserPlants(user.plants)
  })
},[])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserProfile plants={userPlants} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/new-user-form" element={<NewUserForm />} />
        <Route path="/new-plant-form" element={<NewPlantForm />} />
      </Routes>
    </Router>
  );
}


