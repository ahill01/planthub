import { useState } from "react";
import React from 'react'
import PlantDetails from "./PlantDetails";

function PlantSummary({plant, setUserPlants}){
    const [displaySummary, setDisplaySummary] = useState(true)

    function handleClick(){
        console.log("clicked")
        setDisplaySummary(prevState => !prevState)
    }

    return(
    <div className="plantInfo" onClick={handleClick}>
    {displaySummary ?
        (<div className={plant.thirsty ? "summary thirsty": "summary notThirsty"}>
            <img className="thumb" src={plant.picture}></img>
             <h1>{plant.name}</h1>
            <h2>{plant.thirsty ? `Thirsty` : `Not Thirsty`}</h2>
        </div>) :
        (<PlantDetails key={plant.id} plant={plant} setUserPlants={setUserPlants}/>)
    }
    </div>
    )
}

export default PlantSummary;