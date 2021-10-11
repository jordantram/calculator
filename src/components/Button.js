import React from 'react';
import './Button.css';

const Button = ({ handleClick, label, value }) => {
  return (
    <button className='calc-button' onClick={() => {handleClick(value)}}>
      {label}
    </button>
  );
}

export default Button;