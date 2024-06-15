import React from 'react';

const ScrollTo = ({ id, children }) => {
  const handleClick = () => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
};

export default ScrollTo;
