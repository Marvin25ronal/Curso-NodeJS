require('colors');

const mostrarMenu = () => {
    return new Promise((resolve, reject) => {
        console.clear();
        console.log("====================".green)
        console.log("Seleccion una opcion".blue)
        console.log("====================\n".green)

        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tareas`)
        console.log(`${'6.'.green} Borrar tareas`)
        console.log(`${'0.'.green} Salir \n`)

        const readlina = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readlina.question(`Seleccione una opcion: `, (answer) => {
            readlina.close()
            resolve(answer)
        })
    })
}
const pausa = () => {
    return new Promise((resolve, reject) => {
        const readlina = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readlina.question(`\nPresione enter para continuar `.green, (answer) => {
            readlina.close()
            resolve()
        })
    })
}
module.exports = {
    mostrarMenu,
    pausa
}