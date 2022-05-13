import React, { useState, useEffect } from "react";

function PlantForm({currentUser, setCurrentUser}){

    const [newPlant, setNewPlant] = useState({
        name: "",
        plant_category_id:1,
        plant_type: "",
        outside: true,
        picture: "",
        user_id: currentUser.id
      })

      function handleChange(e) {
        //   debugger
        if (e.target.type === "checkbox") {
            setNewPlant({...newPlant, outside: e.target.value})
      } else if( e.target.type === 'select') {
        setNewPlant({...newPlant, ['plant_category']: parseInt(e.target.value)})
      } else { 
        setNewPlant({...newPlant, [e.target.name]:e.target.value})}
    }

    // function handleNameChange(e){
    //     setSelectedOption({value: e.target.value});
    //   }

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
                .then(newItem => alert(`Added ${newItem.name} the ${newItem.plant_type} to your profile :)`))
            e.target.reset();

    }

    // useEffect(() => {fetch('/plant_categories')
    // .then(res => res.json())
    // .then(jsonData => setCategories(jsonData))},[])
    
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
                        {/* {categories.map((category) => <option value = {category.id}>{category.name}</option>)} */}
                        <option value='1'>Herbs</option>
                        <option value='2'>Cacti</option>
                        <option value='3'>Flowering</option>
                        <option value='4'>Foliage</option>
                        <option value='5'>Vegetable/Fruit</option>
                    </select>
                    </label>

                     <label>
                         Plant Type:
                            <input type='text' placeholder='Common Name' name="plant_type" value={newPlant.plant_type} onChange={handleChange} />
                     </label>
                        Environment:
                            <label htmlFor="Indoor"> Indoor </label><br/>
                                <input className='form-checkbox' type="checkbox" id="Indoor" name="Indoor" value={false} />
                        <label htmlFor="Outdoor"> Outdoor </label><br/>
                            <input className='form-checkbox' type="checkbox" id="Outdoor" name="Outdoor" value={true} />
                     <label>
                            
                     </label>
                     <label>
                         Image:
                            <input type='text' name="picture" value={newPlant.picture} onChange={handleChange} />
                     </label>
                     {}
                     <button className='addPlantButton'>Add Plant</button>
                </form>
        </div>
    )
};

export default PlantForm;