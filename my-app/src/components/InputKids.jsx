import React, { useState } from "react";

const InputKids = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const buttonText = isVisible ? "Ocultar Estudiantes" : "Mostrar Estudiantes";

  const addItem = () => {
    setName([...name, text]);
    setText("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="kids-app">
        <div className="addKids">
          <p>Agregar nombre del Estudiante</p>
          <input
            type="text"
            placeholder="Ingrese nombre"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" onClick={addItem}>
            Agregar Estudiantes
          </button>
        </div>
        <div className="showKids">
          <p>Mostrar todos los estudiantes</p>
          {isVisible && name.map((e, index) => <p key={index}>{e}</p>)}
          <button type="submit" onClick={() => setIsVisible(!isVisible)}>
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputKids;
