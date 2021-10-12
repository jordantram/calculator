import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';
import calculatorButtons from './util/calculatorButtons';

const App = () => {
  const [inputDisplay, setInputDisplay] = useState(['0']);
  const [result, setResult] = useState(['0']);
  const [justEvaluated, setJustEvaluated] = useState(false);
  const [openParentheses, setOpenParentheses] = useState(0);
  const [closeParentheses, setCloseParentheses] = useState(0);
  const [decimalAllowed, setDecimalAllowed] = useState(true);
  const [currentOperand, setCurrentOperand] = useState('');

  const handleClick = (button) => {
    const lastItem = result[result.length - 1];
    const lastItemType = calculatorButtons.find(item => item.formula === lastItem).type;
    const lastItemOperation = calculatorButtons.find(item => item.formula === lastItem).operation;

    if (button.type === 'clear') {
      setInputDisplay(['0']);
      setResult(['0']);
      setOpenParentheses(0);
      setCloseParentheses(0);
      setDecimalAllowed(true);
      setCurrentOperand('');
    } else if (button.type === 'open-parenthesis') {
      if (result.join('') === '0' || justEvaluated) {
        setInputDisplay([button.displaySymbol]);
        setResult([button.formula]);
        setOpenParentheses(openParentheses + 1);
        setJustEvaluated(false);
        setCurrentOperand('');
      } else if (lastItemType === 'operator' || lastItemType === 'open-parenthesis') {
        setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
        setResult(prevArray => ([...prevArray, button.formula]));
        setOpenParentheses(openParentheses + 1);
        setJustEvaluated(false);
        setCurrentOperand('');
      }
    } else if (button.type === 'close-parenthesis') {
      if (((lastItemType === 'operand' && lastItemOperation !== 'decimal') 
        || lastItemType === 'close-parenthesis') && closeParentheses < openParentheses) {
        setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
        setResult(prevArray => ([...prevArray, button.formula]));
        setCloseParentheses(closeParentheses + 1);
        setCurrentOperand('');
      }
    } else if (button.type === 'operand') {
      if (lastItemType !== 'close-parenthesis') {
        if ((result.join('') === '0' || justEvaluated) && button.operation !== 'decimal') {
          setInputDisplay([button.displaySymbol]);
          setResult([button.formula]);
          setCurrentOperand(button.formula);
        } else if (button.operation === 'decimal') {
          if (decimalAllowed) {
            setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
            setResult(prevArray => ([...prevArray, button.formula]));
            setDecimalAllowed(false);
            setCurrentOperand(currentOperand + '.');
          }
        } else {
          if (currentOperand === '0') {
            setInputDisplay(prevArray => ([...prevArray.slice(0, prevArray.length - 1), button.displaySymbol]));
            setResult(prevArray => ([...prevArray.slice(0, prevArray.length - 1), button.formula]));
            setCurrentOperand(button.formula);
          } else {
            setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
            setResult(prevArray => ([...prevArray, button.formula]));
            setCurrentOperand(currentOperand + button.formula);
          }
        }

        setJustEvaluated(false);
      }
    } else if (button.type === 'operator') {
      if ((lastItemType === 'operand' && lastItemOperation !== 'decimal')
         || lastItemType === 'close-parenthesis') {
        if (button.operation === 'exponent') {
          setInputDisplay(prevArray => ([...prevArray, button.displaySymbol, '(']));
          setResult(prevArray => ([...prevArray, button.formula, '(']));
          setOpenParentheses(openParentheses + 1);
        } else if (button.operation === 'square') {
          setInputDisplay(prevArray => ([...prevArray, '^', '2']));
          setResult(prevArray => ([...prevArray, '**', '2']));
        } else {
          setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
          setResult(prevArray => ([...prevArray, button.formula]));
        }

        setJustEvaluated(false);
        setDecimalAllowed(true);
        setCurrentOperand('');
      }
    } else if (button.type === 'function') {
      if (result.join('') === '0' || justEvaluated) {
        setInputDisplay([button.displaySymbol, '(']);
        setResult([button.formula, '(']);
        setOpenParentheses(openParentheses + 1);
        setJustEvaluated(false);
        setCurrentOperand('');
      } else {
        if (lastItemType === 'operator' || lastItemType === 'open-parenthesis') {
          setInputDisplay(prevArray => ([...prevArray, button.displaySymbol, '(']));
          setResult(prevArray => ([...prevArray, button.formula, '(']));
          setOpenParentheses(openParentheses + 1);
          setJustEvaluated(false);
          setCurrentOperand('');
        }
      }
    } else if (button.type === 'equals') {
      if ((lastItemType === 'operand' || lastItemType === 'close-parenthesis') && openParentheses === closeParentheses) {
        const answer = eval(result.join('')).toString();
        const answerAsArray = [...answer];
        setInputDisplay(answerAsArray);
        setResult(answerAsArray);
        setJustEvaluated(true);
        setOpenParentheses(0);
        setCloseParentheses(0);
        setDecimalAllowed(true);
        setCurrentOperand('');
      }
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display input={inputDisplay}/>
        <Keypad handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
