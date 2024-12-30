function calc() {
    let res = document.getElementById("res")
    let txtnum = document.getElementById("txtnum")
    if (txtnum.value.length == 0) {
        alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível calcular!"
    } else {
        res.innerHTML = "Calculando: <br><br>"
        let num = Number(txtnum.value)
        for (let c = 1; c <= 10; c++) {
            let prod = num * c
            res.innerHTML += `${num} x ${c} = ${prod} <br>`
        }
    }
}