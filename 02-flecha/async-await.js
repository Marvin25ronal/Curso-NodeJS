const empleados = [
    {
        id: 5,
        nombre: "Mavin",
    },
    {
        id: 1,
        nombre: "Yaiza"
    },
    {
        id: 3,
        nombre: "Luis"
    }
]

const salarios = [
    {
        id: 5,
        salario: 100
    },
    {
        id: 1,
        salario: 3000
    }
]

const getEmpleado = (id, callback) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre
        if (empleado) {
            resolve(empleado)
        } else {
            reject(`No existe el empleado con id ${id}`)
        }
    })
    return promesa;
}
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario
        salario ? resolve(salario) : reject(`No existe ese id para el salario`);
    })

}
const id = 1;


const getInfoUsuario = async () => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} y su salario ${salario}`
    } catch (error) {
        throw error;
    }

}


getInfoUsuario().then(msg => console.log(msg)).catch(err => console.log(err))