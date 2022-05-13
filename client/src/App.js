import React, {useState} from "react";
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

  return (
    <Router>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<UserProfile currentUser={currentUser} setEditPlant={setEditPlant} editPlant={editPlant} />} />
        <Route path="/create-plant" element={<PlantForm setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/edit-plant" element={<Edit currentUser={currentUser} editPlant={editPlant} />} />
      </Routes>
    </Router>
  );
}


