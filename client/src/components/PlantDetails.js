import React from 'react'
import { useNavigate } from 'react-router-dom'

function PlantDetails({plant,setUserPlants, setEditPlant,setWaterings}){
    let navigate = useNavigate();

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

    function handleEditClick(){
        setEditPlant(plant) 
        navigate('/edit-plant')
    }
    
    return(
        <div className="details">
            <h2>{`${plant.name} the ${plant.plant_type}`}</h2>
            <button className="details" onClick={waterPlant}>💧 Water Plant</button>
            <button className="details" onClick={moveOutside}>{plant.outside ? "🪴 Move Inside": "🪴 Move Outside"}</button>
            <button className="details" onClick={deletePlant}>❌ Delete Plant</button>
            <button className="details" onClick={handleEditClick}>✏️ Edit Plant</button>
            <h3>Last Watered:</h3>
            <p>{plant.last_watered ? plant.last_watered:"no waterings yet"}</p>
            <h3>Next Watering:</h3>
            <p>{`${plant.plant_category.water_amount}" on ${plant.next_watering}`}</p>
            <h3>Likes:</h3>
            <p>{plant.plant_category.sun_needs}</p>
            <h3>Category:</h3>
            <p>{plant.plant_category.category}</p>
            {/* <h2>Waterings</h2>
            {waterings.map(watering => <h3>{watering.formatted_time}</h3>)} */}
         
        </div>
    )
}

export default PlantDetails;