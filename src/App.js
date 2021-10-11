import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (value === '=') {
      setInput(eval(input));
    } else {
      if (input === '0' && !isNaN(value)) {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display input={input}/>
        <Keypad handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
