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
    <>
      <input type="text" value={result} readOnly />
      <br />
      <button onClick={clear} id="clear">
        AC
      </button>
      <button onClick={backspace} id="backspace">
        {"<="}
      </button>
      <button name="/" onClick={handleClick}>
        /
      </button>
      <br />
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="*" onClick={handleClick}>
        *
      </button>
      <br />
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="-" onClick={handleClick}>
        -
      </button>
      <br />
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="+" onClick={handleClick}>
        +
      </button>
      <br />
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button onClick={getResult}>=</button>
    </>
  );
};
export default Calculator;
