const fs = require('node:fs')

fs.readFile("./archivo.txt",'utf-8',(err,text)=>{
    console.log("Primer archivo: ",text)
})

console.log("Haciendo cositas de mientras...")

fs.readFile("./archivo2.txt",'utf-8',(err,text)=>{
    console.log("Segundo archivo: ",text)
})