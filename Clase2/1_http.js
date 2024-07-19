const http = require('node:http')
const fs = require('node:fs')

//console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req,res) =>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    if(req.url === '/'){
        res.statusCode = 200
        res.end('<h1>Bienvenido a la página de inicio</h1>')
    }else if(req.url === '/Contact'){
        res.statusCode = 200
        res.end('<h1>CONTACT</h1>')
    }else if(req.url === '/Hola'){
        fs.readFile("Konata.jpg",(err,data) => {
            if(err){
                res.statusCode = 500
                res.end('<h1>Internal server error</h1>')
            }else{
                res.statusCode = 200
                res.setHeader('Content-Type','image/jpg')
                res.end(data)
            }
        })
    }
    else{
        res.statusCode = 404
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort,()=>{
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})