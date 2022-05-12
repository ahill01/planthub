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
            <img className="details" src={plant.picture}></img>
            <h1>{plant.name}</h1>
            <button onClick={waterPlant}>Water</button>
            {waterings.map(watering => <h2>{watering.formatted_time}</h2>)}
            <button onClick={deletePlant}>Delete Plant</button>
        </div>
    )
}

export default PlantDetails;