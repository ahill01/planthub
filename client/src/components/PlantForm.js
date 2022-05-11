import React, { useState } from "react";

function PlantForm(){
    const [name, setName] = useState('');
    const [plantType, setPlantType] = useState('');
    const [image, setImage] = useState('');
    const [selectedOption, setSelectedOption] = useState({});

    function handleSubmit(e){
        e.preventDefault();
        console.log("i was clicked");
    }

    return(
        <div className='plantForm'>
        <h1>PlantHub</h1>
        <form onSubmit={handleSubmit}>
            <h2>Add a new plant</h2>
                     <label>
                         Name:
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)}  />
                     </label>
                     <label>
                         Plant Type:
                            <input type='text' placeholder='Scientific or Common Name' value={plantType} onChange={(e) => setPlantType(e.target.value)} />
                     </label>
                     <label>
                        Environment:
                            <input 
                                type='radio'
                                value="Indoor"
                                checked={selectedOption === "Indoor"} />
                     </label>
                     <label>
                            <input 
                                type='radio'
                                value="Outdoor"
                                checked={selectedOption === "Outdoor"} />
                     </label>
                     <label>
                         Image:
                            <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
                     </label>
                     {}
                     <button className='addPlantButton'>Add Plant</button>
                </form>
        </div>
    )
};

export default PlantForm;