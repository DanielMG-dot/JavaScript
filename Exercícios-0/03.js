let nome = "Daniel" 
let n1 = 9
let n2 = 9
let media = (Number(n1) + Number(n2))/2
console.log("-----------ESCOLA JAVALI CANSADO-----------")
console.log(`Nome: ${nome}`)
console.log(`Nota 1 = ${n1}; Nota 2 = ${n2}`)
console.log(`Média: ${media}`)
if (media >= 9 && media <= 10) {
    console.log(`APROVEITAMENTO: A`)
} else if (media >= 7 && media < 9) {
    console.log("APROVEITAMENTO B")
} else if (media >= 5 && media < 7) {
    console.log("APROVEITAMENTO C")
} else {
    console.log("APROVEITAMENTO D")
}