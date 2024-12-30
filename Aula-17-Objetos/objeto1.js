let amigo = {
    nome: "Pedro",
    sexo: "M",
    peso: 57,
    engordar(p){
        console.log("Engordou!")
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)