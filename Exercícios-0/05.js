let inicio = 2
let final = 8
/*
let contador = null

if (final > inicio) {
    contador = inicio
    while (contador <= final) {
        console.log(contador)
        contador += 1
    }
} else {
    contador = inicio
    while (contador >= final) {
        console.log(contador)
        contador -= 1
    }
}

*/
console.log("Contando: ")
if (final > inicio) {
    for (let contador = inicio; contador <= final; contador += 1) {
        console.log(`${contador}...`)
    }
} else {
    for (let contador = inicio; contador >= final; contador -= 1) {
        console.log(`${contador}...`)
    }
}