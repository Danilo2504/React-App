import React from "react";

function CurdApp(props) {
  return (
    <div class="curd-app">
      <div class="text">
        <p>{props.name}</p>
        <p>{props.age}</p>
      </div>
      <div class="btn">
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </div>
  );
}

export default CurdApp;

// .calculator-app .keyboard{
//   display:flex;
//   margin: auto;
//   width: 200px;
//   height: 150px;
// }
// .calculator-app .keyboard .col-btn-num{
//   width: 150px;
//   height: 150px;
// }
// .calculator-app .keyboard .col-btn-num button{
//   width: 50px;
//   height: 37.5px;
// }

// .calculator-app .keyboard .col-btn-num button{
//   width: 100%;
// }

// .calculator-app .keyboard .col-btn-num .col-btn-num-cle{
//   display: flex;
//   width: 100%;
//   height: 37.5px;
// }

// .calculator-app .keyboard .col-btn-num .col-btn-num-cle button{
//   width: 100%;
// }

// .calculator-app .keyboard .col-btn-num .col-btn-num-cero{
//   display:flex;
//   width: 100%;
//   height: 37.5px;
// }

// .calculator-app .keyboard .col-btn-num .col-btn-num-cero button{
//   width: 100%;
// }

// .calculator-app .keyboard .col-btn-op{
//   display: flex;
//   flex-flow:column wrap;
//   width: 50px;
//   height: 150px;
//   background-color: blue;
// }
