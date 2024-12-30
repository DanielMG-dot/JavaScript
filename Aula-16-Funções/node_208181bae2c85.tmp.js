/*FUNÇÕES

São ações executadas assim que são chamadas ou em decorrência de algum evento
    -> Chamada
    -> Parâmetros
    -> Ação
    -> Retorno
*/

function parimpar(n) {
    if (n % 2 == 0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}
//----------------------------------------//-------------------------------------//

console.log(parimpar(5))

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(3, 7))

//----------------------------------------//-------------------------------------//

let d = function (x) {
    return 2 * x
}

console.log(d(5))

//----------------------------------------//-------------------------------------//

function fatorial (num) {
    let fat = 1
    for (let c = num; c > 1; c++) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))