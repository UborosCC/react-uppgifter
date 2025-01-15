import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Greeting.css';


const Greeting = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name') || 'Guest';

    const getTime = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return { greeting: 'Good Morning', style: morningStyle, icon: '☀️' };
        }
        if (hour < 18) {
            return { greeting: 'Good Afternoon', style: afternoonStyle, icon: '🌤️' };
        }
        return { greeting: 'Good Evening', style: eveningStyle, icon: '🌙' };
    };

    const morningStyle = {
        backgroundImage: 'linear-gradient(#ffd700, #ff7b00, #ff4000)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    
      const afternoonStyle = {
        backgroundImage: 'linear-gradient(#b6d8f0, #87cefa, #87a9fa)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    
      const eveningStyle = {
        backgroundImage: 'linear-gradient(#516678 ,#2c3e50, #1f2830)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };

    const { greeting, style, icon } = getTime();

    return (
        <section style={style}>
            <article className='greeting-box'>
                <button className='back-button' onClick={() => navigate('/')}>Go Back</button>
                <h1>{`${greeting}, ${name}!`}</h1>
                <span style={{ fontSize: '5rem' }}>{icon}</span>
            </article>
        </section>
    );
};

export default Greeting;