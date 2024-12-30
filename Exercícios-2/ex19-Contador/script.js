function contar() {
    let res = document.getElementById("res")
    let ini = document.getElementById("txtini")
    let fim = document.getElementById("txtfim")
    let passo = document.getElementById("txtpas")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert("Passo inválido! Considerando passo igual a 1")
            p = 1
        }

        if (i<f) {
            for (let c=i; c<=f; c+=p ) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for (let c=i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

// Emojis: pesquisar "unicode emoji list"
// Dedo: \u{1F449}
// Chegada: \u{1F3C1}