import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Form from "./components/Form";
const EMAIL = "a@a.com";
const PASSWORD = "123456";
// var a = "hola"
// a = "chao"

// characters = [{id:1}, {}]
// [...characters]
// setCharacters([...characters, {id:2}])
// [ {id:1}, {} , {id:2} ]

function App() {
  let location = useLocation();
  let navigate = useNavigate();
  const [character, setCharacter] = useState({});
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  useEffect(() => {
    console.log(location);
  }, [location]);
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(characterID, string = "all") {
    console.log(characterID);
    axios(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then(({ data }) => {
        if (data.id) {
          if (string !== "all") {
            setCharacter(data);
          } else {
            setCharacters([...characters, data]);
          }
        } else {
          window.alert(`No se encontro un personaje con el ID: ${characterID}`);
        }
      })
      .catch((error) => {
        window.alert(error.response.data.error);
      });
    // window.alert(characterID)
  }
  function login({ email, password }) {
    if (email === EMAIL && password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  }
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={
            <Detail
              character={character}
              onSearch={onSearch}
              onClose={onClose}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
