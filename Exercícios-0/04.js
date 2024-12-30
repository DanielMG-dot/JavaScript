let g1 = 2
let g2 = 4
let dif = null
if (g1 > g2) {
     dif = g1 - g2
} else {
     dif = g2 - g1
}
console.log("----------PLACAR FINAL----------")
console.log(`MADUREIRA (${g1}) X VASCO (${g2})`)
console.log(`Diferença: ${dif}`)
switch(dif){
    case 0:
        console.log("STATUS: EMPATE")
        break
    case 1:
    case 2:
    case 3:
        console.log("STATUS: PARTIDA NORMAL")
        break
    default:
        console.log("STATUS: GOLEADA")
        
    

}