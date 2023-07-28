import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    // capturar lo que escribio el usuario
    // actualizar el estado con eso que escribio
    const { value } = event.target;
    setId(value);
  };
  return (
    <div>
      <input type="search" onChange={(e) => handleChange(e)} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
