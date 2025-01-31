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
        flexDirection: 'column'        
      };
    
      const afternoonStyle = {
        backgroundImage: 'linear-gradient(#b6d8f0, #87cefa, #87a9fa)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'        
      };
    
      const eveningStyle = {
        backgroundImage: 'linear-gradient(#516678 ,#2c3e50, #1f2830)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'        
      };

    const { greeting, style, icon } = getTime();

    return (
        <section style={style}>
            <button className='back-button' onClick={() => navigate('/')}>Go Back</button>
            <article className='greeting-box'>
                <h1>{`${greeting}, ${name}!`}</h1>
                <span style={{ fontSize: '5rem' }}>{icon}</span>
            </article>
            <nav className='greeting-navbox'>
                <h2 className='greeting-h2'>Please choose your next destination</h2>
                <ul className='greeting-ul'>
                    <li className='greeting-list'><button className='greeting-link' onClick={() => navigate('/timer')}>Timer</button></li>                   
                    <li className='greeting-list'><button className='greeting-link' onClick={() => navigate('/color')}>Color</button></li>                   
                </ul>
            </nav>
        </section>
    );
};

export default Greeting;