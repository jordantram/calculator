const calculatorButtons = [
  {
    operation: 'log',
    type: 'function',
    label: 'log',
    formula: 'Math.log10',
    displaySymbol: 'log'
  },
  {
    operation: 'ln',
    type: 'function',
    label: 'ln',
    formula: 'Math.log',
    displaySymbol: 'ln'
  },
  {
    operation: 'open-parenthesis',
    type: 'operand',
    label: '(',
    formula: '(',
    displaySymbol: '('
  },
  {
    operation: 'close-parenthesis',
    type: 'operand',
    label: ')',
    formula: ')',
    displaySymbol: ')'
  },
  {
    operation: 'clear',
    type: 'clear',
    label: 'C',
    formula: null,
    displaySymbol: null
  },
  {
    operation: 'sqrt',
    type: 'function',
    label: '√',
    formula: 'Math.sqrt',
    displaySymbol: '√'
  },
  {
    operation: '7',
    type: 'operand',
    label: '7',
    formula: '7',
    displaySymbol: '7'
  },
  {
    operation: '8',
    type: 'operand',
    label: '8',
    formula: '8',
    displaySymbol: '8'
  },
  {
    operation: '9',
    type: 'operand',
    label: '9',
    formula: '9',
    displaySymbol: '9'
  },
  {
    operation: 'divide',
    type: 'operator',
    label: '÷',
    formula: '/',
    displaySymbol: '÷'
  },
  {
    operation: 'square',
    type: 'operator',
    label: 'x²',
    formula: '**2',
    displaySymbol: '^2'
  },
  {
    operation: '4',
    type: 'operand',
    label: '4',
    formula: '4',
    displaySymbol: '4'
  },
  {
    operation: '5',
    type: 'operand',
    label: '5',
    formula: '5',
    displaySymbol: '5'
  },
  {
    operation: '6',
    type: 'operand',
    label: '6',
    formula: '6',
    displaySymbol: '6'
  },
  {
    operation: 'multiply',
    type: 'operator',
    label: '×',
    formula: '*',
    displaySymbol: '×'
  },
  {
    operation: 'exponent',
    type: 'operator',
    label: 'xʸ',
    formula: '**',
    displaySymbol: '^'
  },
  {
    operation: '1',
    type: 'operand',
    label: '1',
    formula: '1',
    displaySymbol: '1'
  },
  {
    operation: '2',
    type: 'operand',
    label: '2',
    formula: '2',
    displaySymbol: '2'
  },
  {
    operation: '3',
    type: 'operand',
    label: '3',
    formula: '3',
    displaySymbol: '3'
  },
  {
    operation: 'add',
    type: 'operator',
    label: '+',
    formula: '+',
    displaySymbol: '+'
  },
  {
    operation: 'WTI',
    type: 'WTI',
    label: 'WTI',
    formula: null,
    displaySymbol: null
  },
  {
    operation: 'decimal',
    type: 'operand',
    label: '.',
    formula: '.',
    displaySymbol: '.'
  },
  {
    operation: '0',
    type: 'operand',
    label: '0',
    formula: '0',
    displaySymbol: '0'
  },
  {
    operation: 'equals',
    type: 'equals',
    label: '=',
    formula: '=',
    displaySymbol: null
  },
  {
    operation: 'subtract',
    type: 'operator',
    label: '−',
    formula: '-',
    displaySymbol: '−'
  }
];

export default calculatorButtons;