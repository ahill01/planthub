import React, { useEffect, useState } from 'react'

function PlantDetails({plant}){
const [waterings, setWaterings] = useState([])

    useEffect(()=>{
    fetch(`/plants/${plant.id}/waterings`)
    .then(res => res.json())
    .then(this_waterings=> {
     setWaterings(this_waterings)
    }) 
},[])

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
    .then(new_watering => setWaterings(waterings => [...waterings,new_watering]))
    }
    

    return(
        <div className="summary">
            <img src={plant.picture}></img>
            <h1>{plant.name}</h1>
            <button onClick={waterPlant}>Water</button>
            {waterings.map(watering => <h2>${watering.created_at}</h2>)}
        </div>
    )
}

export default PlantDetails;