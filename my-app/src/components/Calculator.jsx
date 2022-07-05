import React, { useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("");
  const [num, setNum] = useState([]);

  const result = () => {
    if (text.includes("+")) {
      let strNum = text.split("+");
      let arrNum = strNum.map(Number);
      setNum(arrNum);
      let result = num.reduce((a, b) => a + b);
      setText(result);
      setNum([]);
    }

    if (text.includes("-")) {
      let strNum = text.split("-");
      let arrNum = strNum.map(Number);
      setNum(arrNum);
      let result = num.reduce((a, b) => a - b);
      setNum([]);
      setText(result);
    }

    if (text.includes("*")) {
      let strNum = text.split("*");
      let arrNum = strNum.map(Number);
      setNum(arrNum);
      let result = num.reduce((a, b) => a * b);
      setNum([]);
      setText(result);
    }

    if (text.includes("/")) {
      let strNum = text.split("/");
      let arrNum = strNum.map(Number);
      setNum(arrNum);
      let result = num.reduce((a, b) => a / b);
      setNum([]);
      setText(result);
    }
  };
  const reset = () => {
    setText("");
    setNum([]);
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={reset}>AC</button>
      <button onClick={() => setText(text + "/")}>/</button>
      <br />
      <button onClick={() => setText(text + "7")}>7</button>
      <button onClick={() => setText(text + "8")}>8</button>
      <button onClick={() => setText(text + "9")}>9</button>
      <button onClick={() => setText(text + "*")}>*</button>
      <br />
      <button onClick={() => setText(text + "4")}>4</button>
      <button onClick={() => setText(text + "5")}>5</button>
      <button onClick={() => setText(text + "6")}>6</button>
      <button onClick={() => setText(text + "-")}>-</button>
      <br />
      <button onClick={() => setText(text + "1")}>1</button>
      <button onClick={() => setText(text + "2")}>2</button>
      <button onClick={() => setText(text + "3")}>3</button>
      <button onClick={() => setText(text + "+")}>+</button>
      <br />
      <button onClick={() => setText(text + "0")}>0</button>
      <button onClick={result}>=</button>
    </>
  );
};
export default Calculator;
