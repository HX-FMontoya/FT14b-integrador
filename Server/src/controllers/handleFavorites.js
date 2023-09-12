let myFavorites = []

const postFav = (req, res) => {
    myFavorites.push(req.body) 
    res.json(myFavorites)
}

// url --> "5"

const deleteFav = (req, res) => {
    const {id} = req.params
    eliminados = myFavorites.filter(fav => fav.id !== Number(id))
    myFavorites = eliminados
    res.send(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}