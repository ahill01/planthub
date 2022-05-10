//list of plants, w/ summaries
import React from 'react'
import PlantSummary from "./PlantSummary"
function UserProfile({plants}){


    return(
        <div clasName="summary">
            <h1>USER PROFILE</h1>
        {/* {plants.map((plant) => {
            <PlantSummary plant={plant}/>
        })} */}
        </div>
    )
}

export default UserProfile;