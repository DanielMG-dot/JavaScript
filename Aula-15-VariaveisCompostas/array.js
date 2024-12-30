//Variáveis compostas -> array / vetor
// let nome = [a, b, c]
//              [0],[1],[2]
// Cada elemento possui seu valor e sua chave de identificação

let num = [0, 2, 4, 6, 8]
console.log(`A array é: ${num}`)
console.log(`O primeiro valor da Array é ${num[0]}`)

//Adicionando elementos

num[5] = 10
console.log(`Adicionamos ${num[5]} na posição 5`)
console.log(num)

//ou

num.push(12)
console.log(`Adicionamos ${num[6]} na posição 6`)
console.log(num)

//Comprimento da array

console.log(`A array possui ${num.length} elementos`)

/*Organizar em ordem crescente

num.sort()
console.log(`A Array na ordem crescente fica: ${num}`)*/

/*Usando o for

for (let c = 0; c < num.length; c++) {
    console.log(`A posição ${c} possui valor ${num[c]}`)
}

*/

//ou

for (let c in num) {
    console.log(`O valor na posição ${c} é ${num[c]}`)
}

//Procurando valores

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição: ${pos}`)
        
    


