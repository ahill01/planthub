//list of plants, w/ summaries
import React, { useEffect, useState } from 'react'
import PlantDetails from './PlantDetails';
import PlantSummary from "./PlantSummary"

function UserProfile({currentUser}){
    const [userPlants, setUserPlants] = useState([])

    useEffect(() => {
        fetch(`/users/${currentUser.id}/plants`)
        .then(res => res.json())
        .then(plants => {
            debugger;
            setUserPlants(plants)
        })
    },[])


    return(
        <div className="summary">
        <h1>USER PROFILE</h1>
        {console.log(userPlants)}
        {userPlants.map((plant) => <PlantSummary key={plant.id} plant={plant}/>
        )}
        {userPlants.map((plant) => <PlantDetails key={plant.id} plant={plant}/>
        )}
        </div>
    )
}

export default UserProfile;