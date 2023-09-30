const { Favorite } = require("../DB_connection");
const getAllFavorites = require("../handlers/getAllFavorites");
const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    if (!name || !origin || !image || !species || !gender)
      return res.status(401).send("Faltan datos");
    await Favorite.findOrCreate({
      where: { name },
      defaults: { id, origin, status, image, species, gender },
    });
    const favorites = await getAllFavorites();
    res.send(favorites);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = postFav;
