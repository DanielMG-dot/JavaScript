let res = document.getElementById("res")
let txtnum = document.getElementById("txtnum")
let lista = document.getElementById("flista")
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
        } else {
            return false
    }
}

function adicionar() {
    if (isNumero(txtnum.value) && !inLista(txtnum.value, valores)) {
        valores.push(Number(txtnum.value))
        let item = document.createElement("option")
        item.text = `Valor ${txtnum.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert("[ERRO] Valor inválido ou já encontrado na lista.")
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("[ERRO] Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos.</p>`
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média desses valores vale ${media}</p>`
    }
}
