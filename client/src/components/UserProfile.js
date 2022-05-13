//list of plants, w/ summaries
import React, { useEffect, useState } from 'react'
import PlantSummary from "./PlantSummary"

function UserProfile({currentUser, editPlant, setEditPlant}){
    const [userPlants, setUserPlants] = useState([])
    const [waterings, setWaterings] = useState([])

    useEffect(() => {
        fetch(`/users/${currentUser.id}/plants`)
        .then(res => res.json())
        .then(plants => {
            setUserPlants(plants)
        })
    },[waterings])

    return(
        <div className="summary">
        <h1 className="summary">{currentUser.id !== undefined ? `${currentUser.fname}'s Plants` : "USER PROFILE"}</h1>
       <h2>{userPlants[0]===undefined ? "It looks like you don't have any plants yet! Click `New Plant` to get started!":""}</h2> 
        {userPlants.map((plant) =><PlantSummary key={plant.id} plant={plant} setUserPlants={setUserPlants} setEditPlant={setEditPlant} setWaterings={setWaterings} />)}
        </div>
    )
}

export default UserProfile;