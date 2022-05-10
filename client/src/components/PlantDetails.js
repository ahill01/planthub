import React, { useEffect } from 'react'

function PlantDetails({plant}){

    useEffect(()=>{
    fetch(`/plants/${plant.id}`)
    .then(res => res.json)
    .then(resPlant=> console.log(plant.waterings)) 
},[])

    function waterPlant(){
        debugger;
    console.log(`watering ${plant.name}`)
     fetch('/waterings', 
     {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({plant_id: plant.id})
    })
    .then(res => res.json())
    .then(watering => console.log(watering))
    }
    

    return(
        <div className="summary">
            <img src={plant.picture}></img>
            <h1>{plant.name}</h1>
            <h2>{`Waterings: ${plant.waterings}`}</h2>
            <button onClick={waterPlant}>water me!</button>
        </div>
    )
}

export default PlantDetails;