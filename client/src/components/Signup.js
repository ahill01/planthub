import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();

        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            body: JSON.stringify({
                fname: firstName, 
                lname: lastName,
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            alert('account successfully cretaed, please sign in!')
            navigate(`/`)

        })
        e.target.reset()
    }

    return(
        <div className='signup'>
        <h1 id='signupTitle'>PlantHub</h1>
                <form onSubmit={handleSubmit}>
                     <h2>Create an account</h2>
                     <label>
                         First Name:
                         <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
                     </label>
                     <label>
                         Last Name:
                         <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                     </label>
                     <label>
                         Username:
                         <input type='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                     </label>
                     <label>
                         Password:
                         <input type='password' value={password} onChange={(e) =>{ 
                             setPassword(e.target.value)}}/>
                     </label>
            
                     <button className='signupButton'>Sign Up</button>
                </form>
        </div>
    )
}

export default Signup;