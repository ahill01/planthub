import { useState } from "react";
import React from 'react'
import PlantDetails from "./PlantDetails";

function PlantSummary({plant, setUserPlants, setEditPlant, setWaterings}){
const [displaySummary, setDisplaySummary]=useState(true)

    function handleClick(){
        console.log("clicked")
        setDisplaySummary(prevState => !prevState)
    }

    return(
    <div className="plantInfo">
        <div className={plant.thirsty ? "summary thirsty": "summary notThirsty"}>
            <img className="thumb" src={plant.picture} alt='' ></img>
             <h1>{plant.name}</h1>
            <h2>{plant.thirsty ? `Thirsty` : `Not Thirsty`}</h2>
            <button onClick={handleClick}>{displaySummary ?"Show ":"Hide "} Details</button>
            {displaySummary ? <br></br> : (<PlantDetails key={plant.id} plant={plant} setUserPlants={setUserPlants} setEditPlant={setEditPlant} setWaterings={setWaterings}/>)} 
        </div>
    </div>
    )
}

export default PlantSummary;