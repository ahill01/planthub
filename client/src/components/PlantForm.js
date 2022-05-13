import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PlantForm({currentUser, categories}){
    const [newPlant, setNewPlant] = useState({
        name: "",
        plant_category_id:1,
        plant_type: "",
        outside: true,
        picture: "",
        user_id: currentUser.id
      })

      let navigate = useNavigate()

      function handleChange(e) {
        if (e.target.type === "checkbox") {
            let outsideBoolean = true
            if(e.target.value === "false") {outsideBoolean = false}
            setNewPlant({...newPlant, outside: outsideBoolean})
      } else if( e.target.type === 'select') {
        setNewPlant({...newPlant, ['plant_category']: parseInt(e.target.value)})
      } else { 
        setNewPlant({...newPlant, [e.target.name]:e.target.value})}
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("/plants", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
            body: JSON.stringify(newPlant)
                })
                .then(res => res.json())
                .then(newItem => 
                    {alert(`${newItem.name} the ${newItem.plant_type} to your profile :)`)
                    navigate(`/profile`)
            })
            e.target.reset();
    }
    
    return(
        <div className='plantForm'>
        <h1 className="plantFormTitle">PlantHub</h1>
        <form onSubmit={handleSubmit}>
            <h2>Add a new plant</h2>
                     <label>
                         Name:
                            <input type='text' value={newPlant.name} name="name" onChange={handleChange}  />
                     </label>
                    <label>
                        Category of Plant:
                        <select name='plant_category' value={newPlant.plant_category} onChange={handleChange}>
                        {categories.map((category) => <option value ={category.id}>{category.category}</option>)}
                    </select>
                    </label>

                     <label>
                         Plant Type:
                            <input name='plant_type' type='text' placeholder='Common Name' value={newPlant.plant_type} onChange={handleChange} />
                     </label>
                        Environment: 
                        <label className='form-checkbox' htmlFor="Indoor"> Indoor </label>
                                <input className='form-checkbox' type="checkbox" id="Indoor" name="Indoor" value={false} onChange={handleChange}/>
                        <label className='form-checkbox' htmlFor="Outdoor"> Outdoor </label>
                            <input className='form-checkbox' type="checkbox" id="Outdoor" name="Outdoor" value={true} onChange={handleChange}/>
                     <label>
                            
                     </label>
                     <label>
                         Image:
                            <input name='picture' type='text' value={newPlant.picture} onChange={handleChange} />
                     </label>
                     {}
                     <button className='addPlantButton'>Add Plant</button>
                </form>
        </div>
    )
};

export default PlantForm;