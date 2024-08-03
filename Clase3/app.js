const express = require('express')
const movies = require('./movies.json')
const crypto = require('crypto')
const {validateMovie} = require('./Schemas/movie')

const app = express()
app.use(express.json());
app.disable('x-powered-by') //desabilitar el header x-powered-by


app.get('/',(req,res) => {
    res.json({message:'Hola mundo'})
})

//Get movies
app.get('/movies',(req,res)=>{
    const {genre} = req.query
    if(genre){
        const filteredMovies = movies.filter(
            movie=>movie.genre.some(g => g.toLowerCase() === genre.toLocaleLowerCase())
        )
        return res.json(filteredMovies)
    }

    res.json(movies)
})

//Get movie por id
app.get('/movies/:id',(req,res)=>{
    const {id} = req.params
    const movie = movies.find(movie => movie.id === id)

    if(movie) return res.json(movie)
    
    res.status(404).json({message:'Movie not found'})
})

app.post('/movies',(req,res)=>{
    console.log(req.body)
    const result = validateMovie(req.body)
    if(result.error){
        return res.status(400).json({error : JSON.parse(result.error.message)})
    }

    const newMovie = {
        id:crypto.randomUUID,
        ...result.data
    }

    movies.push(newMovie)
    res.status(201).json(newMovie)
})


const PORT = process.env.PORT ?? 1234

app.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})