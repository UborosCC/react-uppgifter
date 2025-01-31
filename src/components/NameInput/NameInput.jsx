import './NameInput.css'; //import CSS
import { useDispatch } from 'react-redux';
import { useState } from 'react'; //import useState
import { useNavigate } from 'react-router-dom'; //import useNavigate
import { setName } from '../../redux/UserSlice.jsx';

const NameInput = () => {
    const [inputName, setInputNameState] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputName.trim()) {
            dispatch(setName(inputName));
            navigate(`/greeting?name=${encodeURIComponent(inputName)}`);
        }
    };

    return (
        <main className='nameinput-main'>
        <h1 className='name-greeting'>Welcome, please enter your name:</h1>
        <form onSubmit={handleSubmit}>
            <input className='name-input' type='text' value={inputName} onChange={(e) => setInputNameState(e.target.value)} placeholder='Your Name'/>
            <button className='name-button' type='submit'>Submit</button>
        </form>
        </main>
    );
}

export default NameInput; 