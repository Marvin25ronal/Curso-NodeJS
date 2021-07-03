const { v4: uuidv4 } = require('uuid')
class Tarea {
    id = ''
    desc = ''
    completadoEn = null
    constructor(des) {
        this.id = uuidv4()
        this.desc = des
        this.completadoEn = null
    }

}
module.exports = Tarea;