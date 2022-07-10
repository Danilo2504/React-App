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
    <div class="kids-app">
      <form class="form" onSubmit={(e) => e.preventDefault()}>
        <h2>Agregar nombre del Estudiante</h2>
        <div class="list">
          <input
            type="text"
            placeholder="Ingrese nombre"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" onClick={addItem}>
            Agregar Estudiantes
          </button>
          <p>Mostrar todos los estudiantes</p>
          {isVisible && name.map((e, index) => <p key={index}>{e}</p>)}
          <button type="submit" onClick={() => setIsVisible(!isVisible)}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputKids;
