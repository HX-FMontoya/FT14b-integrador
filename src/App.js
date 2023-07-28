import "./App.css";
import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
const example = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

// var a = "hola"
// a = "chao"

// characters = [{id:1}, {}]
// [...characters]
// setCharacters([...characters, {id:2}])
// [ {id:1}, {} , {id:2} ]

function App() {
  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };
  //
  function onSearch(characterID) {
    console.log(characterID);
    axios(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters([...characters, data]);
        } else {
          window.alert(`No se encontro un personaje con el ID: ${characterID}`);
        }
      })
      .catch((error) => {
        window.alert(error.response.data.error);
      });
    // window.alert(characterID)
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
