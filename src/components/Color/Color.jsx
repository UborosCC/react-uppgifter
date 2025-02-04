import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Color.css';
import Card from './Card';
import Header from './Header';

const Color = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const colors = ['#fcba03', '#fc0303', '#35fc03', '#03adfc', '#5603fc', '#fc03d2', '#1c592a', '#ff6f00'];

  useEffect(() => {
    resetGame();
  }, []);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const resetGame = () => {
    const shuffledColors = shuffleArray([...colors, ...colors]);
    setCards(shuffledColors.map((color, index) => ({ color, id: index })));
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id) || flippedCards.includes(id)) return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const firstCard = cards[newFlipped[0]];
      const secondCard = cards[newFlipped[1]];

      if (firstCard.color === secondCard.color) {
        setMatchedCards((prev) => [...prev, ...newFlipped]);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <main className='color-main'>
      <button className='back-button' onClick={() => navigate('/greeting')}>Go Back</button>
      <Header onReset={resetGame} />
      <section className='color-grid'>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            color={card.color}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </section>
    </main>
  );
};

export default Color