import React from 'react';
import './Button.css';

const Button = ({ handleClick, button }) => {
  return (
    <button className='calc-button' onClick={() => {handleClick(button.formula)}}>
      {button.label}
    </button>
  );
}

export default Button;