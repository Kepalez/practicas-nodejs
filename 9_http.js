const http = require('node:http')
const {findAvailablePort} = require('./10_free_port')

const server = http.createServer((req,res) => {
    console.log('Request recieved')

    res.end('Hola Mundo')
})

const desiredPort = process.env.PORT ?? 3000

findAvailablePort(desiredPort).then(port=>{
    server.listen(port, ()=>{
        console.log(`Listening on port http://localhost:${server.address().port}`)
    })
})

//Puerto 0 -> busca el primer puerto disponible wow!
/**server.listen(desiredPort,() =>{
    console.log(`Listening on port http://localhost:${server.address().port}`)
})*/