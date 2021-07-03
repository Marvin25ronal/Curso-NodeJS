const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,

    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10
    })
    .check((arv, options) => {
        if (isNaN(arv.b)) {
            throw `No es un numero`
        }
        if(isNaN(arv.h)){
            throw `Hasta no es un numero`;
        }
        return true;
    })
    .argv

module.exports = yargs;