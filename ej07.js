const { countries } = require("country-data")

function obtenerMoneda(codigoPais) {
    const pais = countries[codigoPais]

    if (!pais) {
        return "País no encontrado"
    }

    const codigoMoneda = pais.currencies[0]
    const moneda = Object.values(require("country-data").currencies).find(m => m.code === codigoMoneda)

    return moneda ? moneda.name : "Moneda no encontrada"
}

let moneda = obtenerMoneda("AR");
console.log(moneda);