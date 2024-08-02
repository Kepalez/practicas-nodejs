const express = require('express')
const ditto  = require('./Pokemon/ditto.json')
const app = express()

app.disable('x-powered-by') //Desactivamos la cabecera x-powered-by

const PORT = process.env.PORT ?? 1234

//app.use(express.json()) función que hace todo lo que está acá abajo xD

//ejemplo de middleware, un proceso que se hace antes de llegar a la request buena
app.use((req,res,next)=>{
    console.log('Mi primer middleware')
    //Trackear la request a la base de datos
    //Asegurarnos que el usuario este loggeado
    //Revisar si el usuario tiene cookies
    if(req.method !== 'POST') return next()
    if(req.headers['content-type'] !== 'application/json') return next()
    
    //Convertimos la informacion en un json
    let body = ''
    req.on('data',chunk => {
        body+=chunk.toString()
    })
    req.on('end',()=>{
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        req.body = data
        next()
    })
    //next() //importante para que no se quede estancado en el middleware
})

app.get('/',(req,res) => {
    res.status(200).send('<h1>Mi página</h1>')
})
app.get('/pokemon/ditto',(req,res) =>{
    res.json(ditto)
})

app.post('/pokemon',(req,res) => {
    res.status(201).json(req.body)
})


//la ultima a la que va a llegar, como el default de un switch
app.use((req,res) =>{
    res.status(404).send('<h1>404 NOT FOUND</h1>')
})


app.listen(PORT, ()=>{
    console.log(`Server listening on port http://localhost:${PORT}`)
})
