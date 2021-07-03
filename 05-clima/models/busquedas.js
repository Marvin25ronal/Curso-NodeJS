const axios = require('axios')
class Busqueda {
    historial = []
    constructor() {

    }
    async clima(lat = '', lon = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    lat: lat,
                    lon: lon,
                    appid: process.env.API_KEY,
                    lang: 'es',
                    units: 'metric'
                }
            })
            const resp = await instance.get();
            const { weather, main } = resp.data
            return { weather, main }
        } catch (error) {

            return []
        }
    }
    async ciudad(lugar = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: {
                    'access_token': `${process.env.MAPBOX_KEY}`,
                    'limit': 5,
                    'language': 'es'
                }
            })
            const resp = await instance.get();
            const data = resp.data.features.map(elemento => (
                {
                    id: elemento.id,
                    name: elemento.place_name_es,
                    lng: elemento.center[0],
                    lat: elemento.center[1]
                }))
            return data;

        } catch (error) {
            return []
        }
    }
}
module.exports = Busqueda;