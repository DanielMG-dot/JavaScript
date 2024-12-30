let opcao = 1
switch(opcao) {
    case 1:
        console.log("Contando: ")
        for (cont = 1; cont <= 10; cont += 1) {
            console.log(`${cont}...`)
        }
        break
    case 2:
        console.log("Contando: ")
        for (cont = 10; cont >= 1; cont -= 1) {
            console.log(`${cont}...`) 
        }
        break
    case 3:
        console.log("Saindo...") 
        break
    default:
        console.log("INVÁLIDO!") 
}