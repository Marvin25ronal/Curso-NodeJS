
const { crearArchivo } = require('./helpers/multiplicar')
const yargs=require('./config/yargs')

crearArchivo(yargs.b,yargs.l,yargs.h)
    .then(msg=>console.log(msg))