import React, { useState } from 'react';

const ColorCycleButton = () => {
  const colors = ['blue', 'green', 'red', 'purple', 'orange'];
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <button
      style={{ backgroundColor: colors[colorIndex], color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
      onClick={handleClick}
    >
      Click me to change color
    </button>
  );
};

export default ColorCycleButton;
