import React, { useEffect, useState } from 'react'

function PlantDetails({plant,setUserPlants,setWaterings}){
    

    function waterPlant(){
    console.log(`watering ${plant.name}`)
     fetch('/waterings', 
     {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({plant_id: plant.id})
    })
    .then(res => res.json())
    .then(newWatering => {
       setWaterings(prevState => [...prevState, newWatering])
        }) 
    }

    function deletePlant(){
        console.log(`deleting ${plant.name}`)
        fetch(`/plants/${plant.id}`,{
                method:'DELETE'}
                )
        .then(res => res.json())
        .then((deletedPlant) => {
            console.log(deletedPlant)
            setUserPlants((plants)=> plants.filter(plant => plant.id !== deletedPlant.id))
            setWaterings([])
            alert(`${plant.name} deleted`)
        })
    }
    

    return(
        <div className="details">
            <h2>{`${plant.name} the ${plant.plant_type}`}</h2>
            <button onClick={waterPlant}>💧 Water Plant</button>
            <button>{plant.outside ? "🪴 Move Inside": "🪴 Move Outside"}</button>
            <button onClick={deletePlant}>❌ Delete Plant</button>
            <button>✏️ Edit Plant</button>
            <h2>Last Watered:</h2>
            <h3>{plant.last_watered}</h3>
            <h2>Next Watering:</h2>
            <h3>{plant.next_watering}</h3>
            {/* <h2>Waterings</h2>
            {waterings.map(watering => <h3>{watering.formatted_time}</h3>)} */}
         
        </div>
    )
}

export default PlantDetails;