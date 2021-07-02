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
const getSalario = (id, callback) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario
        salario ? resolve(salario) : reject(`No existe ese id para el salario`);
    })

}
const id = 1;
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))


getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))


getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
            })
            .catch(err => console.log(err))
    }).catch(err => console.log(err))