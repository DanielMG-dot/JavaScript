/*FUNÇÕES

São ações executadas assim que são chamadas ou em decorrência de algum evento
    -> Chamada
    -> Parâmetros
    -> Ação
    -> Retorno
*/

//----------------------------------------/EXEMPLO 1/-----------------------------------------//


function parimpar(n) {
    if (n % 2 == 0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}
//----------------------------------------/EXEMPLO 2/----------------------------------------//

console.log(parimpar(5))

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(3, 7))

//----------------------------------------/EXEMPLO 3/----------------------------------------//

let d = function (x) {
    return 2 * x
}

console.log(d(5))

//----------------------------------------/EXEMPLO 4/---------------------------------------//

function fatorial (num) {
    let fat = 1
    for (let c = num; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//----------------------------------------/RECURSIVIDADE/-------------------------------------//

function fato (numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fato(numero - 1)
    }
}

console.log(fato(5))
