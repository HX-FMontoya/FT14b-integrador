const router = require("express").Router();
/*
const express = require('express')
const router = express.Router()
*/
router.get("/", (req, res) => {
  res.send("hello world desde Router");
});
const postUser = require("../controllers/postUser");
const getCharById = require("../controllers/getCharById");

// http://localhost:3001/rickandmorty/character/5 ===>
// traer todos los personajes router.get('/character')
router.get("/character/:id", getCharById);
router.post("/login", postUser);
/* router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav) */

module.exports = router;
