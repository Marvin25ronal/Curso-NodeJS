require('dotenv').config()
const { inquirerMenu, pausa, leerInput, seleccionarLugar } = require('./helpers/inquirer')
const Busqueda = require('./models/busquedas')
const main = async () => {
    let opt = 0;
    const busqueda = new Busqueda();
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                const lugar = await leerInput('Ingresar el nombre de la ciudad')
                const data = await busqueda.ciudad(lugar)
                const id = await seleccionarLugar(data.map(element => ({
                    value: element.id,
                    name: element.name
                })))
                const lugarsele = data.find(element => element.id === id)
                const res = await busqueda.clima(lugarsele.lat, lugarsele.lng)
                console.log(`\nInformacion de la ciudad`)
                console.log(`Ciudad: ${lugarsele.name}`)
                console.log(`Latitud: ${lugarsele.lat}`)
                console.log(`Longitud: ${lugarsele.lng}`)
                console.log(`Minima: ${res.main.temp_min}`)
                console.log(`Maxima: ${res.main.temp_max}`)
                console.log(`Desc: ${res.weather[0].description}`)
                break;
            default:
                break;
        }
        await pausa()
    } while (opt !== '0');
}
main()