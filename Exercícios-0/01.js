let data = new Date()
let ano = data.getFullYear()
let nasc = 2009
let idade = ano - nasc
console.log("----------DEPARTAMENTO DE TRÂNSITO----------")
console.log(`Ano atual: ${ano}`)
console. log(`Idade: ${idade}`)
if (idade < 18) {
    console.log("Não está apto para tirar CNH")
} else {
    console.log("Está apto para tirar CNH")
}