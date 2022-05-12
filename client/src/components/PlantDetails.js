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

    function deletePlant(){
        console.log(`deleting ${plant.name}`)
        fetch(`/plants/${plant.id}`,{
                method:'DELETE',
                headers: {
                  'Content-Type':'application/json',
                }}
                )
        .then(res => res.json)
        .then((resBack) => {
            console.log(resBack)
            alert(`${plant.name} deleted`)
        })
    }
    

    return(
        <div className="summary">
            <img src={plant.picture}></img>
            <h1>{plant.name}</h1>
            <button onClick={waterPlant}>Water</button>
            {waterings.map(watering => <h2>{watering.created_at}</h2>)}
            <button onClick={deletePlant}>Delete Plant</button>
        </div>
    )
}

export default PlantDetails;