function carregar() {
    var corpo = document.querySelector("body");
    var horas = new Date();
    var horat = horas.getHours();
    var res = document.querySelector("div#res");
    var img = document.getElementById("imagem");
    res.innerHTML = `Agora são exatamente ${horat} horas`;

    if (horat >= 5 && horat < 12) {
        img.src = "manha.jpg"
        document.body.style.background = "#dfafb5"
    } else if (horat < 18) {
        img.src = "tarde.jpg"
        document.body.style.background = "#b9846f"
    } else {
        img.src = "noite.jpg"
        document.body.style.background = "#16284d"
    }
}




