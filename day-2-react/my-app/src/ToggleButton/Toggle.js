import { useState } from "react";
import React from 'react';
import './Toggle.css';
import { useMediaQuery } from 'react-responsive';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div
      className="toggle-container"
      style={{
        backgroundColor: isOn ? 'white' : 'black',
        color: isOn ? 'black' : 'white',
        padding: isMobile ? '10px' : isTablet ? '20px' : '40px'
      }}
    >
      <input type="checkbox" id="toggleButton" className="toggle-input" />
      <label htmlFor="toggleButton" className="toggle-label" onClick={handleClick}></label>

      <div>
        <p>
          This is a sample text. It may look different based on screen size.
        </p>
        <p>
          {isMobile && 'Viewing on Mobile'}
          {isTablet && 'Viewing on Tablet'}
          {isDesktop && 'Viewing on Desktop'}
        </p>
      </div>

      <button className="addButton">Add</button>
    </div>
  );
}

export default Toggle;
