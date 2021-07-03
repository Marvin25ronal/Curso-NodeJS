const inquirer = require('inquirer');
require('colors')

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: ' Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1 . Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas COMPLETADAS'
            },
            {
                value: '4',
                name: '4. Listar tareas PENDIENTES'
            },
            {
                value: '5',
                name: '5. COMPLETAR TAREAS'
            },
            {
                value: '6',
                name: '6. BORRAR TAREAS'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} \n`
        }
    ]
    await inquirer.prompt(question)
}

const inquirerMenu = async () => {
    console.clear()
    console.log("====================".green)
    console.log("Seleccion una opcion".blue)
    console.log("====================\n".green)
    const { opcion } = await inquirer.prompt(menuOpt)
    return opcion
}
const leerInput = async (message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length == 0) {
                return 'Por favor ingrese un valor'
            }
            return true
        }
    }]
    const { desc } = await inquirer.prompt(question)
    return desc
}
const mostrarListadoCheck = async (data = []) => {
    const datacheck = data.map(element => {
        element['checked'] = element.completadoEn != null ? true : false
        delete element.completadoEn
        return element
    })
    const options = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Seleccione los datos',
        choices: datacheck
    }]
    const { ids } = await inquirer.prompt(options)
    return ids

}
const borrarInput = async (data) => {
    data.unshift({
        value: '0',
        name: '0.'.green + "Cancelar"
    })
    const deleteOpt = [{
        type: 'list',
        name: 'opcion',
        message: 'Ingrese el numero a eliminar',
        choices: data
    }]

    const { opcion } = await inquirer.prompt(deleteOpt)
    return opcion
}
const confirmar = async (message) => {
    const opt = [
        {
            type: 'confirm',
            name: 'confirmar',
            message
        }
    ]
    const { confirmar } = await inquirer.prompt(opt)
    return confirmar
}
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    borrarInput,
    confirmar,
    mostrarListadoCheck
}