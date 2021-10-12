import React from 'react';
import Button from './Button';
import './Keypad.css';
import calculatorButtons from '../util/calculatorButtons';

const Keypad = ({ handleClick }) => {
  const buttonsPerRow = 5;
  const items = [];

  for (let i = 0; i < calculatorButtons.length / buttonsPerRow; i++) {
    items.push(
      <div className='keypad-row' key={i}>
        {calculatorButtons.slice(i * buttonsPerRow, (i+1) * buttonsPerRow).map((button, index) => {
          return <Button handleClick={handleClick} button={button} key={index}/>
        })}
      </div>
    );
  }

  return (
    <div className='keypad-wrapper'>
      {items}
    </div>
  );
}

export default Keypad;