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
    const empleado = empleados.find(e => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado)
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
}

const id = 1
const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id)?.salario
    if (salario) {
        callback(null, salario)
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
}
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log(err)
        return;
    }
    getSalario(id, (err, salario) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`)
    })
})


