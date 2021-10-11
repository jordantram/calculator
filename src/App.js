import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display input={"Hello"}/>
        <Keypad />
      </div>
    </div>
  );
}

export default App;
