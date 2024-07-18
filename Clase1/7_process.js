//argumentos de entrada
console.log(process.argv)

//Controlar el proceso y su salida
//process.exit(1)

//podemos controlar eventos del proceso
//process.on('exit',()=>{
    //hacer algo
//})

//Current Working Directory
console.log(process.cwd())

//platform
console.log(process.env.COSA) //ejecutar como COSA=Algo node 7_process.js, debería funcionar