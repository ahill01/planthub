import React, { useEffect, useState } from 'react'
import PlantSummary from "./PlantSummary"
import PlantDetails from './PlantDetails'

function PlantInfo({plant, setUserPlants}){
    const [displaySummary, setDisplaySummary] = useState(true)



return (
    <div className='plantInfo'>
    <button onClick={setDisplaySummary(!displaySummary)}> {displaySummary ? "Display Details":"Hide Details"}</button>
    {displaySummary ? <PlantSummary key={plant.id} plant={plant} setUserPlants={setUserPlants} setDisplaySummary={setDisplaySummary} displaySummary={displaySummary}/>:(<PlantDetails key={plant.id} plant={plant} setUserPlants={setUserPlants} setDisplaySummary={setDisplaySummary} displaySummary={displaySummary}/>)
    }
    </div>
) 
}

export default PlantInfo;