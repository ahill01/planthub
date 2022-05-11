//list of plants, w/ summaries
import React from 'react'
import PlantDetails from './PlantDetails';
import PlantSummary from "./PlantSummary"

function UserProfile({plants}){


    return(
        <div className="summary">
        <h1>USER PROFILE</h1>
        {plants.map((plant) => <PlantSummary key={plant.id} plant={plant}/>
        )}
        {plants.map((plant) => <PlantDetails key={plant.id} plant={plant}/>
        )}
        </div>
    )
}

export default UserProfile;