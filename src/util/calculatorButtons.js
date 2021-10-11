const calculatorButtons = [
  {
    operation: 'negate',
    type: 'function',
    label: '±',
    formula: '-'
  },
  {
    operation: 'open-parenthesis',
    type: 'operand',
    label: '(',
    formula: '('
  },
  {
    operation: 'close-parenthesis',
    type: 'function',
    label: ')',
    formula: ')'
  },
  {
    operation: 'clear',
    type: 'clear',
    label: 'C',
    formula: null
  },
  {
    operation: 'delete',
    type: 'delete',
    label: '⌫',
    formula: null
  },
  {
    operation: 'sqrt',
    type: 'function',
    label: '√',
    formula: 'Math.sqrt'
  },
  {
    operation: '7',
    type: 'operand',
    label: '7',
    formula: '7'
  },
  {
    operation: '8',
    type: 'operand',
    label: '8',
    formula: '8'
  },
  {
    operation: '9',
    type: 'operand',
    label: '9',
    formula: '9'
  },
  {
    operation: 'divide',
    type: 'operator',
    label: '÷',
    formula: '/'
  },
  {
    operation: 'square',
    type: 'operator',
    label: 'x²',
    formula: '**2'
  },
  {
    operation: '4',
    type: 'operand',
    label: '4',
    formula: '4'
  },
  {
    operation: '5',
    type: 'operand',
    label: '5',
    formula: '5'
  },
  {
    operation: '6',
    type: 'operand',
    label: '6',
    formula: '6'
  },
  {
    operation: 'multiply',
    type: 'operator',
    label: '×',
    formula: '*'
  },
  {
    operation: 'exponent',
    type: 'function',
    label: 'xʸ',
    formula: 'Math.pow'
  },
  {
    operation: '1',
    type: 'operand',
    label: '1',
    formula: '1'
  },
  {
    operation: '2',
    type: 'operand',
    label: '2',
    formula: '2'
  },
  {
    operation: '3',
    type: 'operand',
    label: '3',
    formula: '3'
  },
  {
    operation: 'add',
    type: 'operator',
    label: '+',
    formula: '+'
  },
  {
    operation: 'WTI',
    type: 'WTI',
    label: 'WTI',
    formula: null
  },
  {
    operation: 'decimal',
    type: 'operand',
    label: '.',
    formula: '.'
  },
  {
    operation: '0',
    type: 'operand',
    label: '0',
    formula: '0'
  },
  {
    operation: 'equals',
    type: 'equals',
    label: '=',
    formula: '='
  },
  {
    operation: 'subtract',
    type: 'operator',
    label: '−',
    formula: '-'
  }
];

export default calculatorButtons;