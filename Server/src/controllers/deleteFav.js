const { Favorite } = require("../DB_connection");
const getAllFavorites = require("../handlers/getAllFavorites");
const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Favorite.destroy({
      where: { id },
    });
    if (!response) {
      return res.send({ message: "No se pudo eliminar" });
    } else {
      const favorites = await getAllFavorites();
      return res.send(favorites);
    }
    res.send("delete");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deleteFav;
