import './NameInput.css'; //import CSS
import React, { useState } from 'react'; //import useState
import { useNavigate } from 'react-router-dom'; //import useNavigate

const NameInput = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            navigate(`/greeting?name=${encodeURIComponent(name)}`);
        }
    };

    return (
        <main className='nameinput-main'>
        <h1 className='name-greeting'>Welcome, please enter your name:</h1>
        <form onSubmit={handleSubmit}>
            <input className='name-input' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name'/>
            <button className='name-button' type='submit'>Submit</button>
        </form>
        </main>
    );
}

export default NameInput; 