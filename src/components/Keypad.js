import React from 'react';
import Button from './Button';
import './Keypad.css';

const Keypad = ({ handleClick }) => {
  return (
    <div className='keypad-wrapper'>
      <div className='keypad-row'>
        <Button handleClick={handleClick} label={'±'} value={'negate'}/>
        <Button handleClick={handleClick} label={'('} value={'('}/>
        <Button handleClick={handleClick} label={')'} value={')'}/>
        <Button handleClick={handleClick} label={'C'} value={'clear'}/>
        <Button handleClick={handleClick} label={'⌫'} value={'delete'}/>
      </div>
      <div className='keypad-row'>
        <Button handleClick={handleClick} label={'√'} value={'sqrt'}/>
        <Button handleClick={handleClick} label={'7'} value={'7'}/>
        <Button handleClick={handleClick} label={'8'} value={'8'}/>
        <Button handleClick={handleClick} label={'9'} value={'9'}/>
        <Button handleClick={handleClick} label={'÷'} value={'/'}/>
      </div>
      <div className='keypad-row'>
        <Button handleClick={handleClick} label={'x²'} value={'sq'}/>
        <Button handleClick={handleClick} label={'4'} value={'4'}/>
        <Button handleClick={handleClick} label={'5'} value={'5'}/>
        <Button handleClick={handleClick} label={'6'} value={'6'}/>
        <Button handleClick={handleClick} label={'×'} value={'*'}/>
      </div>
      <div className='keypad-row'>
        <Button handleClick={handleClick} label={'xʸ'} value={'exp'}/>
        <Button handleClick={handleClick} label={'1'} value={'1'}/>
        <Button handleClick={handleClick} label={'2'} value={'2'}/>
        <Button handleClick={handleClick} label={'3'} value={'3'}/>
        <Button handleClick={handleClick} label={'+'} value={'+'}/>
      </div>
      <div className='keypad-row'>
        <Button handleClick={handleClick} label={'WTI'} value={'WTI'}/>
        <Button handleClick={handleClick} label={'.'} value={'.'}/>
        <Button handleClick={handleClick} label={'0'} value={'0'}/>
        <Button handleClick={handleClick} label={'='} value={'='}/>
        <Button handleClick={handleClick} label={'−'} value={'-'}/>
      </div>
    </div>
  );
}

export default Keypad;