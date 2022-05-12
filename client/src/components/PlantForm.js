import React, { useState, useEffect } from "react";

function PlantForm({currentUser, setCurrentUser}){

    const [newPlant, setNewPlant] = useState({
        nick_name: "",
        category_of_plant: '',
        plant_type: "",
        environment: '',
        image: "",
        plants_to_add: []
      })

      function handleChange(e) {
        if (e.target.type !== "checkbox") {
            setNewPlant({...newPlant, [e.target.environment]: e.target.value})
        } else {
          const plantArr = []   
          document.querySelectorAll("input[type=checkbox]").forEach(plant => plant.checked ? plantArr.push(plant.name) : null)
          setNewPlant({...newPlant, plants_to_add: [...plantArr]})
        }
      }

    // function handleChange(e){
    //     setSelectedOption({value: e.target.value});
    //   }

    function handleSubmit(e){
        // alert('Added ' + nick_name + ' the ' + plantType + ' to your profile :)');
        e.preventDefault();

        fetch("/create-plant", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
             },
            body: JSON.stringify(newPlant)
                }).then(res => res.json())
                .then(newItem => setCurrentUser([...currentUser, newItem]))
                    console.log(newPlant)
            e.target.reset();
    }

    useEffect(() => {fetch('/plant_categories')
    .then(res => res.json())
    .then(jsonData => setCategories(jsonData))},[])
    
    return(
        <div className='plantForm'>
        <h1 className="plantFormTitle">PlantHub</h1>
        <form onSubmit={handleSubmit}>
            <h2>Add a new plant</h2>
                     <label>
                         Name:
                            <input type='text' value={nick_name} name="nick_name" onChange={(e) => setNewPlant(e.target.value)}  />
                     </label>
                    <label>
                        Category of Plant:
                        <select value={setNewPlant} onChange={handleChange}>
                        {/* {categories.map((category) => <option value = {category.id}>{category.name}</option>)} */}
                        <option value="Herbs">Herbs</option>
                        <option value="Cacti">Cacti</option>
                        <option value="Flowering">Flowering</option>
                        <option value="Foliage">Foliage</option>
                        <option value="Vegetable/Fruit">Vegetable/Fruit</option>
                    </select>
                    </label>

                     <label>
                         Plant Type:
                            <input type='text' placeholder='Common Name' value={plantType} onChange={(e) => setPlantType(e.target.value)} />
                     </label>
                        Environment:
                            <label htmlFor="Indoor"> Indoor </label><br/>
                                <input className='form-checkbox' type="checkbox" id="Indoor" name="Indoor" value="Indoor" />
                        <label htmlFor="Outdoor"> Outdoor </label><br/>
                            <input className='form-checkbox' type="checkbox" id="Outdoor" name="Outdoor" value="Outdoor" />
                     <label>
                            
                     </label>
                     <label>
                         Image:
                            <input type='text' value={image} onChange={(e) => setNewPlant(e.target.value)} />
                     </label>
                     {}
                     <button className='addPlantButton'>Add Plant</button>
                </form>
        </div>
    )
};

export default PlantForm;