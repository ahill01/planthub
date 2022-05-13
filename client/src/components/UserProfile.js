//list of plants, w/ summaries
import React, { useEffect, useState } from 'react'
import PlantSummary from "./PlantSummary"

function UserProfile({currentUser}){
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
        <h1>USER PROFILE</h1>
        {userPlants.map((plant) =><PlantSummary key={plant.id} plant={plant} setUserPlants={setUserPlants} setWaterings={setWaterings}/>)}
        </div>
    )
}

export default UserProfile;