import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [lastOperand, setLastOperand] = useState('0');
  const [justEvaluated, setJustEvaluated] = useState(false);

  const operations = ['+', '-', '*', '/', '='];

  const handleClick = (value) => {
    if (operations.includes(value) && operations.includes(input.slice(-1))) {
      return;
    }

    setJustEvaluated(false);
  
    if (value === 'clear') {
      setInput('0');
    } else if (value === 'delete') {
      if (input.length === 1) {
        setInput('0');
      } else {
        setInput(input.slice(0, -1));
      }
    } else if (value === '=') {
      setInput(eval(input).toString());
      setJustEvaluated(true);
      setLastOperand('0');
    } else { // value is either a number or one of the basic operations defined in 'operations'
      if ((input === '0' || justEvaluated) && !isNaN(value) ) {
        setInput(value);
        setLastOperand(value);
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
