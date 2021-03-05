
const fecha = 






const cambiarFecha = (fecha) => {
    return new Date(fecha);
}

const fecha = document.createElement('p');

date.textContent = cambiarFecha("2018-01-31T04:30:14.000Z")

console.log(date)


const f = new Date("2018-01-31T04:30:14.000Z");

fecha = f.toLocaleString()

console.log(fecha)