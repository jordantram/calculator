(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(e,_,t){"use strict";_.a=[{operation:"log",type:"function",label:"log",formula:"Math.log10",displaySymbol:"log"},{operation:"ln",type:"function",label:"ln",formula:"Math.log",displaySymbol:"ln"},{operation:"open-parenthesis",type:"open-parenthesis",label:"(",formula:"(",displaySymbol:"("},{operation:"close-parenthesis",type:"close-parenthesis",label:")",formula:")",displaySymbol:")"},{operation:"clear",type:"clear",label:"C",formula:null,displaySymbol:null},{operation:"sqrt",type:"function",label:"\u221a",formula:"Math.sqrt",displaySymbol:"\u221a"},{operation:"seven",type:"operand",label:"7",formula:"7",displaySymbol:"7"},{operation:"eight",type:"operand",label:"8",formula:"8",displaySymbol:"8"},{operation:"nine",type:"operand",label:"9",formula:"9",displaySymbol:"9"},{operation:"divide",type:"operator",label:"\xf7",formula:"/",displaySymbol:"\xf7"},{operation:"square",type:"operator",label:"x\xb2",formula:"**2",displaySymbol:"^2"},{operation:"four",type:"operand",label:"4",formula:"4",displaySymbol:"4"},{operation:"five",type:"operand",label:"5",formula:"5",displaySymbol:"5"},{operation:"six",type:"operand",label:"6",formula:"6",displaySymbol:"6"},{operation:"multiply",type:"operator",label:"\xd7",formula:"*",displaySymbol:"\xd7"},{operation:"exponent",type:"operator",label:"x\u02b8",formula:"**",displaySymbol:"^"},{operation:"one",type:"operand",label:"1",formula:"1",displaySymbol:"1"},{operation:"two",type:"operand",label:"2",formula:"2",displaySymbol:"2"},{operation:"three",type:"operand",label:"3",formula:"3",displaySymbol:"3"},{operation:"add",type:"operator",label:"+",formula:"+",displaySymbol:"+"},{operation:"WTI",type:"WTI",label:"WTI",formula:null,displaySymbol:null},{operation:"decimal",type:"operand",label:".",formula:".",displaySymbol:"."},{operation:"zero",type:"operand",label:"0",formula:"0",displaySymbol:"0"},{operation:"equals",type:"equals",label:"=",formula:"=",displaySymbol:null},{operation:"subtract",type:"operator",label:"\u2212",formula:"-",displaySymbol:"\u2212"}]},,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_components_Display__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),_components_Keypad__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(21),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_util_calculatorButtons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(["0"]),_useState2=Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),inputDisplay=_useState2[0],setInputDisplay=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(["0"]),_useState4=Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),_useState6=Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),justEvaluated=_useState6[0],setJustEvaluated=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState8=Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),openParentheses=_useState8[0],setOpenParentheses=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState10=Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState9,2),closeParentheses=_useState10[0],setCloseParentheses=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState12=Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState11,2),currentOperand=_useState12[0],setCurrentOperand=_useState12[1],handleClick=function handleClick(button){var lastItem=result[result.length-1],lastItemType=_util_calculatorButtons__WEBPACK_IMPORTED_MODULE_6__.a.find((function(e){return e.formula===lastItem})).type,lastItemOperation=_util_calculatorButtons__WEBPACK_IMPORTED_MODULE_6__.a.find((function(e){return e.formula===lastItem})).operation;if("clear"===button.type)setInputDisplay(["0"]),setResult(["0"]),setOpenParentheses(0),setCloseParentheses(0),setCurrentOperand("");else if("open-parenthesis"===button.type)"0"===result.join("")||justEvaluated?(setInputDisplay([button.displaySymbol]),setResult([button.formula]),setOpenParentheses(openParentheses+1),setJustEvaluated(!1),setCurrentOperand("")):"operator"!==lastItemType&&"open-parenthesis"!==lastItemType||(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.displaySymbol])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.formula])})),setOpenParentheses(openParentheses+1),setJustEvaluated(!1),setCurrentOperand(""));else if("close-parenthesis"===button.type)("operand"===lastItemType&&"decimal"!==lastItemOperation||"close-parenthesis"===lastItemType)&&closeParentheses<openParentheses&&(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.displaySymbol])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.formula])})),setCloseParentheses(closeParentheses+1),setCurrentOperand(""));else if("operand"===button.type)"close-parenthesis"!==lastItemType&&("0"===result.join("")||justEvaluated?"decimal"===button.operation?(setInputDisplay(["0",button.displaySymbol]),setResult(["0",button.formula]),setCurrentOperand("0.")):(setInputDisplay([button.displaySymbol]),setResult([button.formula]),setCurrentOperand(button.formula)):"decimal"===button.operation?-1===currentOperand.indexOf(".")&&(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.displaySymbol])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.formula])})),setCurrentOperand(currentOperand+button.formula)):"0"===currentOperand?(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e.slice(0,e.length-1)),[button.displaySymbol])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e.slice(0,e.length-1)),[button.formula])})),setCurrentOperand(button.formula)):(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.displaySymbol])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.formula])})),setCurrentOperand(currentOperand+button.formula)),setJustEvaluated(!1));else if("operator"===button.type)("operand"===lastItemType&&"decimal"!==lastItemOperation||"close-parenthesis"===lastItemType)&&("exponent"===button.operation?(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.displaySymbol,"("])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.formula,"("])})),setOpenParentheses(openParentheses+1)):"square"===button.operation?(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),["^","2"])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),["**","2"])}))):(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.displaySymbol])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.formula])}))),setJustEvaluated(!1),setCurrentOperand(""));else if("function"===button.type)"0"===result.join("")||justEvaluated?(setInputDisplay([button.displaySymbol,"("]),setResult([button.formula,"("]),setOpenParentheses(openParentheses+1),setJustEvaluated(!1),setCurrentOperand("")):"operator"!==lastItemType&&"open-parenthesis"!==lastItemType||(setInputDisplay((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.displaySymbol,"("])})),setResult((function(e){return[].concat(Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[button.formula,"("])})),setOpenParentheses(openParentheses+1),setJustEvaluated(!1),setCurrentOperand(""));else if("equals"===button.type&&("operand"===lastItemType||"close-parenthesis"===lastItemType)&&openParentheses===closeParentheses){var answer=eval(result.join("")).toString(),answerAsArray=Object(_mnt_d_Documents_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(answer);setInputDisplay(answerAsArray),setResult(answerAsArray),setJustEvaluated(!0),setOpenParentheses(0),setCloseParentheses(0),setCurrentOperand("")}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"calc-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Display__WEBPACK_IMPORTED_MODULE_3__.a,{input:inputDisplay}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Keypad__WEBPACK_IMPORTED_MODULE_4__.a,{handleClick:handleClick})]})})};__webpack_exports__.a=App},function(e,_,t){"use strict";t(2),t(17);var a=t(1);_.a=function(e){var _=e.input;return Object(a.jsx)("div",{className:"calc-display",children:_.join("")})}},function(e,_,t){"use strict";t(2),t(19);var a=t(1),s=function(e){var _=e.handleClick,t=e.button;return Object(a.jsx)("button",{className:"calc-button ".concat(t.type),onClick:function(){_(t)},children:t.label})},o=(t(20),t(4));_.a=function(e){for(var _=e.handleClick,t=[],r=0;r<o.a.length/5;r++)t.push(Object(a.jsx)("div",{className:"keypad-row",children:o.a.slice(5*r,5*(r+1)).map((function(e,t){return Object(a.jsx)(s,{className:e.operation,handleClick:_,button:e},t)}))},r));return Object(a.jsx)("div",{className:"keypad-wrapper",children:t})}},,,,,function(e,_,t){},function(e,_,t){},,function(e,_,t){},function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(2),s=t.n(a),o=t(8),r=t.n(o),n=(t(16),t(9)),l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(_){var t=_.getCLS,a=_.getFID,s=_.getFCP,o=_.getLCP,r=_.getTTFB;t(e),a(e),s(e),o(e),r(e)}))},u=t(1);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(n.a,{})}),document.getElementById("root")),l()}],[[22,1,2]]]);
//# sourceMappingURL=main.e6eaba3d.chunk.js.map