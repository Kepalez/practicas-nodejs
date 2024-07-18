const path = require('node:path')

//Barra separadora de carpetas segun SO
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

//nombre del archivo
const base = path.basename(filePath)
console.log(base)

//nombre sin extension
const filename = path.basename(filePath,'.txt')
console.log(filename)

//Solo la extension
const extension = path.extname(base)
console.log(extension)