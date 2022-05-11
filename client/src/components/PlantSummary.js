import { useEffect } from "react";
import React from 'react'

function PlantSummary({plant}){

    return(
        <div className="summary">
            <img src={plant.picture}></img>
            <h1>{plant.name}</h1>
        </div>
    )
}

export default PlantSummary;