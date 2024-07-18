const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory){
    let files
    try{
        files = await fs.readdir(directory)
    }catch{
        console.err('No se ha podido leer el directorio ',directory)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(directory,file)
        let stats
        try{
            stats = await fs.stat(filePath)
        }catch{
            console.error('No se pudo leer el archivo ',filePath)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return ''+fileType+' '+pc.blue(file.padEnd(20))+' '+pc.green(fileSize.toString().padStart(10))+' '+pc.yellow(fileModified)
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo =>{
        console.log(fileInfo)
    })
}

ls(folder)