const {readFile} = require('node:fs/promises')

// CommonJS no tiene un async nativo, entonces nostros hacemos nuestra propia función async
// IIFE: Inmediatly Invoked Function Expression, una funcion que se llama sola
;(
    async ()=>{
        const text = await readFile("./archivo.txt",'utf-8')
        console.log("Primer texto: ", text)
        
        console.log("-----> Haciendo cositas de mientras...")
        
        const segundoTexto = await readFile("./archivo2.txt",'utf-8')
        console.log("Segundo texto: ",segundoTexto)
    }
)()




