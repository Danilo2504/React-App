import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const clear = () => {
    setResult("");
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const getResult = () => {
    if (result.includes("+")) {
      let strNum = result.split("+");
      let arrNum = strNum.map(Number);
      let total = arrNum.reduce((a, b) => a + b);
      setResult(total.toString());
    }
    if (result.includes("-")) {
      let strNum = result.split("-");
      let arrNum = strNum.map(Number);
      let total = arrNum.reduce((a, b) => a - b);
      setResult(total.toString());
    }
    if (result.includes("*")) {
      let strNum = result.split("*");
      let arrNum = strNum.map(Number);
      let total = arrNum.reduce((a, b) => a * b);
      setResult(total.toString());
    }
    if (result.includes("/")) {
      let strNum = result.split("/");
      let arrNum = strNum.map(Number);
      let total = arrNum.reduce((a, b) => a / b);
      setResult(total.toString());
    }
  };

  return (
    <div class="calculator-app">
      <div class="print">
        <input type="text" value={result} readOnly />
      </div>
      <div class="keyboard">
        <div class="col-btn-num">
          <div class="col-btn-num-cle">
            <button onClick={clear} id="clear">
              AC
            </button>
            <button onClick={backspace} id="backspace">
              {"<="}
            </button>
          </div>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <div class="col-btn-num-cero">
            <button name="0" onClick={handleClick}>
              0
            </button>
          </div>
        </div>
        <div class="col-btn-op">
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button onClick={getResult}>=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
