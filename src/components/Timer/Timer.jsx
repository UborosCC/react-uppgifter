import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Timer.css'; 

function Timer() {
const location = useLocation();
const navigate = useNavigate();
const [count, setCount] = useState(0); //used for counting seconds
const [isRunning, setIsRunning] = useState(false); //used to handle timer running state
const timerRef = useRef(null); //Reference for the intervval

const formatTime = (totalSeconds) => { //calculates hours, minutes and seconds for the counter
    const hours = String(Math.floor(totalSeconds / 3000)).padStart(2, "0"); //calculates hours
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"); //calculates mintues
    const seconds = String(totalSeconds % 60).padStart(2, "0"); //calculates seconds
    return `${hours}:${minutes}:${seconds}`; //returns the full counter
}

const handleStart = () => { //handles timer start
    if (!isRunning) { 
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000)
    }
};

const handlePause = () => { //handles timer pause
    setIsRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
};

const handleReset = () => { //handles timer reset
    setIsRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
    setCount(0);
};

useEffect (() => { 
    return () => clearInterval(timerRef.current);
}, []);

return (
    <main className='timer-main'>
        <button className='timer-back-button' onClick={() => navigate('/greeting')}>Go Back</button>
        <h1 className='timer'>Timer: {formatTime(count)}</h1>
        <section className='timer-buttons'>
            <button className='start-button' onClick={handleStart} disabled={isRunning}>Start</button>
            <button className='pause-button' onClick={handlePause} disabled={!isRunning}>Pause</button>
            <button className='reset-button' onClick={handleReset}>Reset</button>
        </section>
    </main>
);
}

export default Timer;