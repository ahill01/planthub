import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import AllAboutPlants from "./components/AllAboutPlants";
import Navbar from "./components/Navbar"
import NewUserForm from "./components/NewUserForm"
import NewPlantForm from "./components/NewPlantForm"


export default function App() {
  return (
    <Router>
    <Link to="/all-about-plants">All About Plants</Link>
      <switch>
        <Route path="/" element={<AllAboutPlants />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/new-user-form" element={<NewUserForm />} />
        <Route path="/new-plant-form" element={<NewPlantForm />} />
      </switch>
    </Router>
  );
}


