import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"
import PlantForm from "./components/PlantForm"
import UserProfile from "./components/UserProfile";
import Edit from './components/Edit';


export default function App() {
const [currentUser, setCurrentUser] = useState({})
const [editPlant, setEditPlant] = useState({})

fetch('/plants')
.then(res => res.json)
.then(plant => (plant))

  return (
    <Router>
      <Navbar currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Login onLogin={setCurrentUser} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<UserProfile currentUser={currentUser} setEditPlant={setEditPlant} editPlant={editPlant} />} />
        <Route path="/create-plant" element={<PlantForm setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/edit-plant" element={<Edit setCurrentUser={setCurrentUser} currentUser={currentUser} setEditPlant={setEditPlant} editPlant={editPlant} />} />
      </Routes>
    </Router>
  );
}


