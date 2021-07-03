const Tarea = require("./tarea");
require("colors")
class Tareas {
    _listado = {};
    constructor() {
        this._listado = {};
    }
    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    }
    cargarDatos(data = []) {
        data.map((tarea) => {
            this._listado[tarea.id] = tarea
        })
    }
    listadoCompleto() {
        let listado = ''
        const arr = this.listadoArr
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            listado += `${element.completadoEn != null ? (index + 1).toString().green : (index + 1).toString().red}: ${element.desc} :: ${element.completadoEn != null ? "Completada".green : "Pendiente".red}\n`
        }
        return listado
    }
    listarPendientesCompletadas(completadas = true) {
        let listado = '\n'
        if (completadas) {
            const arr = this.listadoArr.filter(element => element.completadoEn != null)
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                listado += `${element.completadoEn != null ? (index + 1).toString().green : (index + 1).toString().red}: ${element.desc} :: ${element.completadoEn.toString().green}\n`
            }
        } else {
            const arr = this.listadoArr.filter(element => element.completadoEn == null)
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                listado += `${element.completadoEn != null ? (index + 1).toString().green : (index + 1).toString().red}: ${element.desc} :: ${element.completadoEn != null ? "Completada".green : "Pendiente".red}\n`
            }
        }
        return listado
    }
    get labels() {

        return this.listadoArr.map((element, i) => {
            return ({
                value: element.id,
                name: `${(i + 1).toString().green} ${element.desc}`
            })
        })
    }
    get labels2() {

        return this.listadoArr.map((element, i) => {
            return ({
                value: element.id,
                name: `${(i + 1).toString().green} ${element.desc}`,
                completadoEn: element.completadoEn
            })
        })
    }
    delete(id) {
        delete this._listado[id]
    }
    completar(ids = []) {
        const d = new Date()
        Object.keys(this._listado).forEach((key) => {
            if (ids.find((id) => (id === key))) {
                this._listado[key].completadoEn = d.toTimeString()
            } else {
                this._listado[key].completadoEn = null
            }
        })
    }
}
module.exports = Tareas;