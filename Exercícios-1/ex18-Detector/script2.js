function verificar() {
    var data = new Date()
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "homemcrianca.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "homemjovem.jpg")
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "homemadulto.jpg")
            } else {
                //idoso
                img.setAttribute("src", "homemidoso.jpg")
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "mulhercrianca.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "mulherjovem.jpg")
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "mulheradulta.jpg")
            } else {
                //idoso
                img.setAttribute("src", "mulheridosa.jpg")
            }
        }
        res.innerHTML = `Detectamos : ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}