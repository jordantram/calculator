import React from 'react';
import './Button.css';

const Button = ({ value }) => {
  return (
    <button className='calc-button'>
      {value}
    </button>
  );
}

export default Button;