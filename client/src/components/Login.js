import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Login({ setCurrentUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const user = {
            username: username,
            password
        }
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user}) 
       })
       .then(res=> res.json())
       .then((user) => {setCurrentUser(user)
         navigate('/profile')})
    }

    return (
        <div className='login'>
            <h1 id='loginTitle'>PlantHub</h1>
                <form onSubmit={handleSubmit} >
                     <h2 id='loginSubtitle'>Log into your account</h2>
                     <label>
                         Username:
                         <input type='username' value={username} onChange={(e) => setUsername(e.target.value)} autoFocus />
                     </label>
                     <label>
                         Password:
                         <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                     </label>
            
                     <button className='loginButton'>Sign In</button>
                </form>
            <div>
                <h4>Don't have an account?</h4>
                    <Link to="/Sign-up">
                        <button className='signUpButton'type="button">Sign Up</button>
                    </Link>
            </div>
        </div>
        
    )
    }

export default Login; 