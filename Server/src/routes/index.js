const router = require("express").Router();
/*
const express = require('express')
const router = express.Router()
*/
router.get("/", (req, res) => {
  res.send("hello world desde Router");
});
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const getCharById = require("../controllers/getCharById");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
// http://localhost:3001/rickandmorty/character/5 ===>
// traer todos los personajes router.get('/character')
router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
/* router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav) */

module.exports = router;
