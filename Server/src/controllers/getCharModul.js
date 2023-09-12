const axios = require('axios')

const successHandler = (response, res) => {
    const {name, gender, species, origin = origin.name, image, status, id } = response.data
    const character = {name, gender, species, origin, id, image, status }
    res.writeHead(200, {'Content-Type': "Application/Json"})
    res.end(JSON.stringify(character))
}

const errorHandler = (error, res)=> {
    res.writeHead(500, {'Content-Type': "text/plain"})
    res.end(error.message)
}

const getCharById = (res, id) => {
 axios.get(`https://rickandmortyapi.com/api/character/${id}`) // --> reject o resolve
.then(response =>successHandler(response, res), (error)=> errorHandler(error, res))   
}

/*
PromiseA = axios(url)
PromiseA // {id: 1}
.then(s) {id: 2}
.then(s) {id: 3}
.then(s)



PromiseA.then(e).then(e).then(e)

PromiseA
.then(s) // {id: 2}
.then(s)


*/


module.exports = getCharById;