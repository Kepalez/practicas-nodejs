import {readFile} from 'node:fs/promises'


const text = await readFile("./archivo.txt",'utf-8')
console.log("Primer texto: ", text)

console.log("-----> Haciendo cositas de mientras...")

const segundoTexto = await readFile("./archivo2.txt",'utf-8')
console.log("Segundo texto: ",segundoTexto)




