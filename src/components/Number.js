import React, { useState } from 'react';

export default function Number({ dark }) {
  const [currentNumber, setCurrentNumber] = useState('0'); // Current input number
  const [previousNumber, setPreviousNumber] = useState(null); // Previous number
  const [operation, setOperation] = useState(null); // Current operation

  // Handle number button clicks
  const numClicked = (num) => {
    setCurrentNumber(prev => (prev === '0' || prev === 'Error' ? String(num) : prev + num));
  };

  // Handle operation button clicks
  const operationClicked = (op) => {
    if (operation) {
      calculate(); // Calculate first if an operation already exists
    }
    setPreviousNumber(currentNumber); // Save current number as previous number
    setCurrentNumber('0'); // Reset current number
    setOperation(op); // Set the selected operation
  };

  // Perform calculation based on the operation
  const calculate = () => {
    if (previousNumber && operation) {
      const a = parseFloat(previousNumber);
      const b = parseFloat(currentNumber);
      let result;
      switch (operation) {
        
        case 'add':
          result = a + b;
          break;
        case 'subtract':
          result = a - b;
          break;
        case 'multiply':
          result = a * b;
          break;
        case 'divide':
          result = b !== 0 ? a / b : 'Error';
          break;
          case 'percent':
         result = (a/ b) *100 ;
         break;
          default:
          result = 'Error';
      }
      setCurrentNumber(String(result));
      setPreviousNumber(null);
      setOperation(null);
    }
  };

  // Delete the last character
  const deleteNum = () => {
    setCurrentNumber(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  // Clear the current input and result
  const clear = () => {
    setCurrentNumber('0');
    setPreviousNumber(null);
    setOperation(null);
  };

  const handleDecimal = () => {
    setCurrentNumber(prev => (prev.includes('.') ? prev : prev + '.'));
  };

  const displayNumber = () => {
    return currentNumber.includes('.') ? parseFloat(currentNumber).toFixed(5) : currentNumber;
  };

  return (
    <>
      <div
        className="position-absolute ml-43vh"
        style={{
          color: dark.color,
          top: '46%',
          right: '5%',
          transform: 'translateY(-50%)',
          textAlign: 'right',
          fontSize: '50px',
          whiteSpace: 'nowrap',
        }}
      >
        {displayNumber()}
      </div>
      <div
        className="position-absolute container text-center"
        style={{
          backgroundColor: dark.color,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '45vh',
          height: '1px',
          borderRadius: '5px',
        }}
      >
        <div
          className="container grid-container"
          style={{ fontSize: '25px', color: dark.color, cursor: 'pointer' }}
        >
          <div className="row my-4">
            <div className="col-3 grid-item mx-0.5" onClick={clear}>AC</div>
            <div className="col-3 grid-item mx-0.5" onClick={deleteNum}>x</div>
            <div className="col-3 grid-item mx-0.5" onClick={calculate}>=</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => operationClicked('percent')}>%</div>
          </div>
          <div className="row my-4">
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(7)}>7</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(8)}>8</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(9)}>9</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => operationClicked('divide')}>/</div>
          </div>
          <div className="row my-4">
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(4)}>4</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(5)}>5</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(6)}>6</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => operationClicked('multiply')}>*</div>
          </div>
          <div className="row my-4">
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(1)}>1</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(2)}>2</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(3)}>3</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => operationClicked('subtract')}>-</div>
          </div>
          <div className="row my-4">
            <div className="col-3 grid-item mx-0.5"></div>
            <div className="col-3 grid-item mx-0.5" onClick={() => numClicked(0)}>0</div>
            <div className="col-3 grid-item mx-0.5" onClick={handleDecimal}>.</div>
            <div className="col-3 grid-item mx-0.5" onClick={() => operationClicked('add')}>+</div>
          </div>
        </div>
      </div>
    </>
  );
}
