import React, { Component } from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">0</div>
        <div className="container">
          <div className="calculator-keypad">
            <button type="button" className="calculator-key key-clear">AC</button>
            <button type="button" className="calculator-key key-sign">±</button>
            <button type="button" className="calculator-key key-percent">%</button>
            <button type="button" className="calculator-key key-0">0</button>
            <button type="button" className="calculator-key key-dot">●</button>
            <button type="button" className="calculator-key key-1">1</button>
            <button type="button" className="calculator-key key-2">2</button>
            <button type="button" className="calculator-key key-3">3</button>
            <button type="button" className="calculator-key key-4">4</button>
            <button type="button" className="calculator-key key-5">5</button>
            <button type="button" className="calculator-key key-6">6</button>
            <button type="button" className="calculator-key key-7">7</button>
            <button type="button" className="calculator-key key-8">8</button>
            <button type="button" className="calculator-key key-9">9</button>
          </div>
          <div className="operator-keys">
            <button type="button" className="calculator-key key-divide">÷</button>
            <button type="button" className="calculator-key key-multiply">×</button>
            <button type="button" className="calculator-key key-subtract">−</button>
            <button type="button" className="calculator-key key-add">+</button>
            <button type="button" className="calculator-key key-equals">=</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;
