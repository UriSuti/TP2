const { URL } = require("url")

function parsearUrl(direccion) {
    try {
        const urlObj = new URL(direccion)

        const parametros = {}
        urlObj.searchParams.forEach((value, key) => {
            parametros[key] = value
        })

        return {
            host: urlObj.origin,
            pathname: urlObj.pathname,
            parametros: parametros
        }
    } catch (error) {
        console.error("Se produjo una excepción:", error.message)
    }
}

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo")
console.log(objeto)

parsearUrl("hola")