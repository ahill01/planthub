import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PlantDetails({plant,setUserPlants, editPlant, setEditPlant,setWaterings}){
const [waterings, setWaterings] = useState([])

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

    function updateRenderedPlant (plantArray, updatedPlant) {
        const copyPlantArr = [...plantArray]
      const index = copyPlantArr.findIndex(element => element.id === updatedPlant.id)
        copyPlantArr.splice(index,1,updatedPlant)
        console.log(copyPlantArr)
        return copyPlantArr
    }

    function moveOutside(){
        fetch(`/plants/${plant.id}`,{
            method:'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ outside: !plant.outside })
        })
        .then(res => res.json())
        .then(updatedPlant => {
            setUserPlants(prevState => updateRenderedPlant(prevState,updatedPlant))
            console.log(setUserPlants)
        })
}

    function handleClick(){
        setEditPlant(plant) 
        navigate('/edit-plant')
    }
    
    let navigate = useNavigate();

        

    return(
        <div className="details">
            <h2>{`${plant.name} the ${plant.plant_type}`}</h2>
            <button onClick={waterPlant}>💧 Water Plant</button>
            <button onClick={moveOutside}>{plant.outside ? "🪴 Move Inside": "🪴 Move Outside"}</button>
            <button onClick={deletePlant}>❌ Delete Plant</button>
            <button onClick={handleClick}>✏️ Edit Plant</button>
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