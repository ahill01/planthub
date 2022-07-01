import React, {useState,useEffect} from "react";
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
const [categories, setCategories] = useState([])

useEffect(() => {fetch(`/plant_categories`)
.then(res => res.json())
.then(jsonData => setCategories(jsonData))},[])

  return (
    <Router>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/sign-up" element={<Signup setCurrentUser={setCurrentUser}/>} />
        <Route path="/profile" element={<UserProfile currentUser={currentUser} setEditPlant={setEditPlant} editPlant={editPlant} />} />
        <Route path="/create-plant" element={<PlantForm currentUser={currentUser} categories={categories} />} />
        <Route path="/edit-plant" element={<Edit currentUser={currentUser} editPlant={editPlant} categories={categories}/>} />
      </Routes>
    </Router>
  );
}


