import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [numbers, setNumbers] = useState([]);

  const arrNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
  const arrOperation = ["/", "*", "-", "+"];

  const backspace = () => {
    setResult(result.slice(0, -1));
    setNumbers([result.slice(0, -1)]);
  };

  const clear = () => {
    setResult("");
    setNumbers([]);
  };

  const showResult = () => {
    console.log(result);
    console.log(numbers);
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    setNumbers([result.concat(e.target.name)]);
  };

  return (
    <div className="calculator-app">
      <div className="print">
        <input type="text" value={result} readOnly />
      </div>
      <div className="keyboard">
        <div className="col-btn-num">
          <div className="col-btn-num-cle">
            <button id="clear" onClick={() => clear()}>
              CA
            </button>
            <button id="backspace" onClick={() => backspace()}>
              {"<="}
            </button>
          </div>
          {arrNumbers.map((val, index) => {
            return (
              <button name={val} key={index} onClick={(e) => handleClick(e)}>
                {val}
              </button>
            );
          })}
          <div className="col-btn-num-cero">
            <button name="0" onClick={(e) => handleClick(e)}>
              0
            </button>
          </div>
        </div>
        <div className="col-btn-op">
          {arrOperation.map((val, index) => {
            return (
              <button name={val} key={index} onClick={(e) => handleClick(e)}>
                {val}
              </button>
            );
          })}
          <button onClick={() => showResult()}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
