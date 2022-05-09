//list of plants, w/ summaries
import React from 'react'

function UserProfile({user}){


    return(
        <div clasName="summary">
        user.plants.map((plant) => {
            <PlantSummary plant={plant}/>
        })
        </div>
    )
}

export default UserProfile;