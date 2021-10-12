import React from 'react';
import './Button.css';

const Button = ({ handleClick, button }) => {
  return (
    <button className={`calc-button ${button.type}`} onClick={() => {handleClick(button)}}>
      {button.label}
    </button>
  );
}

export default Button;