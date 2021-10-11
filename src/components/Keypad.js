import React from 'react';
import Button from './Button';
import './Keypad.css';

const Keypad = () => {
  return (
    <div className='keypad-wrapper'>
      <div className='keypad-row'>
        <Button value={"±"}/>
        <Button value={"("}/>
        <Button value={")"}/>
        <Button value={"C"}/>
        <Button value={"⌫"}/>
      </div>
      <div className='keypad-row'>
        <Button value={"√"}/>
        <Button value={7}/>
        <Button value={8}/>
        <Button value={9}/>
        <Button value={"÷"}/>
      </div>
      <div className='keypad-row'>
        <Button value={"x²"}/>
        <Button value={4}/>
        <Button value={5}/>
        <Button value={6}/>
        <Button value={"×"}/>
      </div>
      <div className='keypad-row'>
        <Button value={"xʸ"}/>
        <Button value={1}/>
        <Button value={2}/>
        <Button value={3}/>
        <Button value={"+"}/>
      </div>
      <div className='keypad-row'>
        <Button value={"WTI"}/>
        <Button value={"."}/>
        <Button value={0}/>
        <Button value={"="}/>
        <Button value={"−"}/>
      </div>
    </div>
  );
}

export default Keypad;