require('colors');
const Tareas = require('./models/tareas')
const { inquirerMenu, pausa, leerInput, borrarInput, confirmar, mostrarListadoCheck } = require('./helpers/inquirer')
const { guardarArchivo, leerArchivo } = require('./helpers/guardarArchivo')
const main = async () => {
    let opt = 0;
    const tareas = new Tareas();
    const data = await leerArchivo()
    tareas.cargarDatos(data)
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                console.log(desc);
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoCompleto())
                break;
            case '3':
                console.log(tareas.listarPendientesCompletadas(true));
                break;
            case '4':
                console.log(tareas.listarPendientesCompletadas(false));
                break;
            case '5':
                const ids=await mostrarListadoCheck(tareas.labels2)
                tareas.completar(ids)
                break;
            case '6':
                const el = await borrarInput(tareas.labels)
                if (el !== '0') {
                    const conf = await confirmar("Esta seguro de eliminar esa tarea?\n")
                    if (conf) {
                        tareas.delete(el)
                    }
                }
                break;
        }
        await pausa()
    } while (opt !== '0');
    guardarArchivo(tareas.listadoArr)
}
main();