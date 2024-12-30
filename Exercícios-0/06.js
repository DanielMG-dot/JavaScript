let notas = [8,5,9,4,10,3,6,7]
let maior = notas[0]
let menor = notas[0]

console.log(`A turma tem ${notas.length} notas`)

for (let pos in notas) {
    if (notas[pos] > maior) {
        maior = notas[pos]
    }
    if (notas[pos] < menor) {
        menor = notas[pos]
    }
}

console.log(`A maior nota foi: ${maior}`)
console.log(`A menor nota foi: ${menor}`)