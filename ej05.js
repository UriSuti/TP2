const { URL } = require("url")

function parsearUrl(direccion) {
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
}

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo")
console.log(objeto)
