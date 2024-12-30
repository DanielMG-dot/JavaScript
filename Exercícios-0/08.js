let valores = [4, 0, 6, 0, 2]
let soma = 0
let div5 = 0
let nulo = 0
let spar = 0

for (let pos in valores) {
    soma += valores[pos]

    if (valores[pos] % 5 == 0) {
        div5 += 1
    }

    if (valores[pos] == 0) {
        nulo += 1
    }

    if (valores[pos] % 2 == 0) {
        spar += valores[pos]
    }
}
let media = soma/valores.length

console.log(`Sua array possui ${valores.length} valores`)
console.log(`A soma desses valores vale ${soma}`)
console.log(`A média entre esses valores vale ${media}`)
console.log(`No total, há ${div5} valores divisíveis por 5`)
console.log(`No total, há ${nulo} valores nulos`)
console.log(`A soma dos valores pares vale ${spar}`)