import React from 'react'

function PlantSummary({plant}){


    return(
        <div clasName="summary">
            <img src={plant.picture}></img>
            <h1>Plant.name</h1>
            <h2>Plant.watering[0]</h2>
        </div>
    )
}

export default PlantSummary;