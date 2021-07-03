const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base, listar,hasta) => {
    return new Promise((resolve) => {
        console.clear()
        let salida = ''
        for (let i = 1; i <= hasta; i++) {
            salida += `${base}${'x'.blue}${i}=${base * i}\n`
        }
        if (listar) {
            console.log(salida)
        }
        salida=salida.reset
        fs.writeFileSync('./salida.txt', salida)
        resolve("YA")
    })

}

module.exports = {
    crearArchivo
}
