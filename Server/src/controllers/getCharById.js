const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

// Async Await
const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    // response -> {data: {}}
    const { name, gender, species, origin = origin.name, image, status } = data;
    res.status(201).json({ name, gender, species, origin, image, status });
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

// Promesas
/* const getCharById = (req, res) => {
  const { id } = req.params; // {id: 5}
  // console.log(id)
  axios
    .get(`${URL}/${id}`)
    .then(({ data }) => {
      console.log(data);
      if (data) {
        const {
          name,
          gender,
          species,
          origin = origin.name,
          image,
          status,
        } = data;
        const character = { name, gender, species, origin, id, image, status };
        res.status(201).json(character);
      } else {
        res.status(404).json({ mesagge: "Not Found" });
      }
    })
    .catch((error) => {
      //  console.log(error)
      res.status(500).json({ message: "HOLA, FALLE" });
      //console.log(error)
    });
}; */

//! WEB SERVER
// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) => {
//         console.log(data)
//         const {name, gender, species, origin = origin.name, image, status } = data
//         const character = {name, gender, species, origin, id, image, status }

//         res.end(JSON.stringify(character))

//     })
//     .catch((reason) => {
//         res.writeHead(500, {'Content-Type': "text/plain"})
//         res.end(reason.message)
//     })

// }

module.exports = getCharById;
