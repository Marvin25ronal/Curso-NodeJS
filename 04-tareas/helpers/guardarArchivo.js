const fs = require('fs')

const guardarArchivo = (data) => {
    const archivo = './db/data.json'
    fs.writeFileSync(archivo, JSON.stringify(data))
}
const leerArchivo = async () => {
    const archivo = './db/data.json'
    const data = await fs.readFileSync(archivo, 'utf-8')
    return JSON.parse(data)
}
module.exports = {
    guardarArchivo,
    leerArchivo
}