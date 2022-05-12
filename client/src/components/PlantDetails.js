import React, { useEffect, useState } from 'react'

function PlantDetails({plant,setUserPlants}){
const [waterings, setWaterings] = useState([])

useEffect(()=>{setWaterings(plant.waterings)},[])

    function waterPlant(){
    console.log(`watering ${plant.name}`)
    console.log(waterings)
     fetch('/waterings', 
     {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({plant_id: plant.id})
    })
    .then(res => res.json())
    .then(newWatering => {
        console.log(newWatering)
        const newWaterings = [...waterings, newWatering]
       setWaterings(newWaterings)
        console.log(waterings)
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
            <button onClick={waterPlant}>💧 Water Plant</button>
            <button onClick={deletePlant}>❌ Delete Plant</button>
            <button>✏️ Edit Plant</button>
            <h2>Waterings</h2>
            {waterings.map(watering => <h3>{watering.formatted_time}</h3>)}
         
        </div>
    )
}

export default PlantDetails;