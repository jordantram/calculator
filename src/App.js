import React, { useState } from 'react';
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
      setCurrentOperand('');
    } else if (button.type === 'open-parenthesis') {
      if (result.join('') === '0' || justEvaluated) {
        // The current result/output is either 0 or a just calculated value, so we can replace it with a 
        // new equation starting with the opening parenthesis
        setInputDisplay([button.displaySymbol]);
        setResult([button.formula]);
        setOpenParentheses(openParentheses + 1);
        setJustEvaluated(false);
        setCurrentOperand('');
      } else if (lastItemType === 'operator' || lastItemType === 'open-parenthesis') {
        // Otherwise, an open parenthesis can only go after an operator or another open parenthesis
        setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
        setResult(prevArray => ([...prevArray, button.formula]));
        setOpenParentheses(openParentheses + 1);
        setJustEvaluated(false);
        setCurrentOperand('');
      }
    } else if (button.type === 'close-parenthesis') {
      if (((lastItemType === 'operand' && lastItemOperation !== 'decimal') 
        || lastItemType === 'close-parenthesis') && closeParentheses < openParentheses) {
        /* Closing parenthesis can only go after a digit or another closing parenthesis, otherwise
           we should not be allowed to enter a closing parenthesis. Also, we should not be able to 
           add more closing parentheses than we have opening parentheses */
        setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
        setResult(prevArray => ([...prevArray, button.formula]));
        setCloseParentheses(closeParentheses + 1);
        setCurrentOperand('');
      }
    } else if (button.type === 'operand') {
      // An operand in this case includes digits or decimals (i.e. the parts that make up an operand)
      if (lastItemType !== 'close-parenthesis') {
        // Operands can start after any type (i.e after operators, opening parenthesis) except for closing parenthesis
        if (result.join('') === '0' || justEvaluated) {
          // If the result displayed is just a 0 or a recently calculated result, we want to completely replace it
          // with any operand we enter instead of appending to it.
          if (button.operation === 'decimal') {
            setInputDisplay(['0', button.displaySymbol]);
            setResult(['0', button.formula]);
            setCurrentOperand('0.');
          } else {
            setInputDisplay([button.displaySymbol]);
            setResult([button.formula]);
            setCurrentOperand(button.formula);
          }
        } else {
          if (button.operation === 'decimal') {
            if (currentOperand.indexOf('.') === -1) {
            // Only add the decimal if the current operand doesn't have a decimal already
            // (i.e. can't have two decimal points in a single number)
              setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
              setResult(prevArray => ([...prevArray, button.formula]));
              setCurrentOperand(currentOperand + button.formula);
            }
          } else {
            // Button is not a decimal, but is a digit
            if (currentOperand === '0') {
              // If the current operand is 0, we want to make sure we remove it and replace it with 
              // the digit we just pressed to avoid leading zeros.
              setInputDisplay(prevArray => ([...prevArray.slice(0, prevArray.length - 1), button.displaySymbol]));
              setResult(prevArray => ([...prevArray.slice(0, prevArray.length - 1), button.formula]));
              setCurrentOperand(button.formula);
            } else {
              setInputDisplay(prevArray => ([...prevArray, button.displaySymbol]));
              setResult(prevArray => ([...prevArray, button.formula]));
              setCurrentOperand(currentOperand + button.formula);
            }
          }
        }

        setJustEvaluated(false);
      }
    } else if (button.type === 'operator') {
      // Operators (i.e. +, -, x, /) can only come after operands or closing parentheses
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
        setCurrentOperand('');
      }
    } else if (button.type === 'function') {
      if (result.join('') === '0' || justEvaluated) {
        // Current result/output is either 0 or a just calculated value, so we can replace it with a new equation
        // starting with the function that was selected
        setInputDisplay([button.displaySymbol, '(']);
        setResult([button.formula, '(']);
        setOpenParentheses(openParentheses + 1);
        setJustEvaluated(false);
        setCurrentOperand('');
      } else {
        // Functions (i.e. sqrt(), log(), log10()) can only come after operators or opening parentheses
        if (lastItemType === 'operator' || lastItemType === 'open-parenthesis') {
          setInputDisplay(prevArray => ([...prevArray, button.displaySymbol, '(']));
          setResult(prevArray => ([...prevArray, button.formula, '(']));
          setOpenParentheses(openParentheses + 1);
          setJustEvaluated(false);
          setCurrentOperand('');
        }
      }
    } else if (button.type === 'equals') {
      // Equals only come after operands or closing parentheses
      if ((lastItemType === 'operand' || lastItemType === 'close-parenthesis') && openParentheses === closeParentheses) {
        const answer = eval(result.join('')).toString();
        const answerAsArray = [...answer];
        setInputDisplay(answerAsArray);
        setResult(answerAsArray);
        setJustEvaluated(true);
        setOpenParentheses(0);
        setCloseParentheses(0);
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
