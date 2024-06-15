import React, { useEffect } from 'react';  

const AnimatedHeading = ({ text }) => {
  useEffect(() => {
    const heading = document.getElementById('animated-heading');
    const characters = heading.querySelectorAll('span');

    characters.forEach(char => {
      char.classList.add('visible');
      setTimeout(() => flipCharacter(char, char.dataset.target), 0); // Start flipping together
    });
  }, []);

  const flipCharacter = (span, targetChar) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ;'";
    let currentCharIndex = Math.floor(Math.random() * alphabet.length);
    const flip = () => {
      if (alphabet[currentCharIndex] !== targetChar && targetChar !== ' ')  {
        span.textContent = alphabet[currentCharIndex];
        currentCharIndex = (currentCharIndex + 1) % alphabet.length;
        setTimeout(flip, 50); // Increase this number to slow down the animation
      } else if (targetChar === ' ') {
        span.textContent = ' ';
      } else {
        span.textContent = targetChar;
      }
    };
  
    flip();
  };

  return (
    <h1 id="animated-heading">
      {text.split('').map((char, index) => (
        <span key={index} data-target={char} style={{ '--char-index': index }}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
