import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Edit({currentUser, setCurrentUser, editPlant, setEditPlantntUser}){

    const [updatedPlant, setUpdatedPlant] = useState({
        name: editPlant.name,
        plant_category: editPlant.plant_category,
        plant_type: editPlant.plant_type,
        outside: editPlant.outside,
        picture: editPlant.picture,
        user_id: currentUser.id
      })

      function handleChange(e) {
        if (e.target.type === "checkbox") {
            let outsideBoolean = true
            if(e.target.value === "false") {outsideBoolean = false}
            setUpdatedPlant({...updatedPlant, outside: outsideBoolean})
      } else if( e.target.type === 'select') {
        setUpdatedPlant({...updatedPlant, ['plant_category']: parseInt(e.target.value)})
      } else { 
        setUpdatedPlant({...updatedPlant, [e.target.name]:e.target.value})}
    }

    function handleSubmit(e){
        
        e.preventDefault();

        fetch(`/plants/${editPlant.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
             },
            body: JSON.stringify(updatedPlant)
                })
                .then(res => res.json())
                .then(newItem => alert(`${newItem.name} the ${newItem.plant_type} has been updated :)`))
            e.target.reset();
    }
    
    return(
        <div className='plantForm'>
        <Navbar />
        <h1 className="plantFormTitle">PlantHub</h1>
        <form onSubmit={handleSubmit}>
            <h2>Edit your plant</h2>
                     <label>
                         Edit Name:
                            <input type='text' value={updatedPlant.name} name="name" onChange={handleChange}  />
                     </label>
                    <label>
                        Edit Category of Plant:
                        <select name='plant_category' value={updatedPlant.plant_category} onChange={handleChange}>
                        <option value='1'>Herbs</option>
                        <option value='2'>Cacti</option>
                        <option value='3'>Flowering</option>
                        <option value='4'>Foliage</option>
                        <option value='5'>Vegetable/Fruit</option>
                    </select>
                    </label>

                     <label>
                         Edit Plant Type:
                            <input name='plant_type' type='text' placeholder='Common Name' value={updatedPlant.plant_type} onChange={handleChange} />
                     </label>
                        Edit Environment:
                            <label htmlFor="Indoor"> Indoor </label><br/>
                                <input className='form-checkbox' type="checkbox" id="Indoor" name="Indoor" value={false} />
                        <label htmlFor="Outdoor"> Outdoor </label><br/>
                            <input className='form-checkbox' type="checkbox" id="Outdoor" name="Outdoor" value={true} />
                     <label>
                            
                     </label>
                     <label>
                         Edit Image:
                            <input name='picture' type='text' value={updatedPlant.picture} onChange={handleChange} />
                     </label>
                     {}
                     <button className='addPlantButton'>Add Plant</button>
                </form>
        </div>
    )
};

export default Edit;