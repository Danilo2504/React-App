import React, { useState } from "react";

function ShowPerson(props) {
  return (
    <div className="personRender">
      <p>{props.name}</p>
      <p>{props.age}</p>
      <button>EDIT</button>
      <button>DELETE</button>
    </div>
  );
}

function CurdApp() {
  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState("");
  const [arrPerson, setArrPerson] = useState([]);

  const arrContainter = [personName, personAge];

  const pattern = new RegExp("^[a-zA-Z]+$", "i");

  const addPerson = () => {
    if (personName === "" && personAge === "") {
      alert("Por favor ingrese el nombre y la edad de la persona.");
    } else {
      if (!pattern.test(personName)) {
        alert("El nombre de la persona que tiene estar en letras.");
      } else {
        console.log("funca, nombre correcto");
        setArrPerson([...arrPerson, [...arrContainter]]);
        setPersonName("");
      }

      if (!Number.isInteger(parseInt(personAge))) {
        alert("La edad de la persona tiene que ser un numero.");
      } else {
        console.log("funca, edad correcta");
        setArrPerson([...arrPerson, [...arrContainter]]);
        setPersonAge("");
      }
    }
  };

  return (
    <div className="container">
      <div className="titles">
        <p>Name</p>
        <p>Age</p>
        <p>Action</p>
      </div>
      {arrPerson.map((e, index) => (
        <ShowPerson key={index} name={arrPerson[0][0]} age={arrPerson[0][1]} />
      ))}
      <div className="addPerson">
        <input
          type="text"
          placeholder="Ingrese nombre"
          name="Name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese Edad"
          name="Age"
          value={personAge}
          onChange={(e) => setPersonAge(e.target.value)}
        />
        <button type="submit" onClick={() => addPerson()}>
          ADD +
        </button>
      </div>
    </div>
  );
}

export default CurdApp;
