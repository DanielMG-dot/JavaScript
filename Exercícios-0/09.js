function fatorial (num) {
    let fat = 1
    for (let c = num; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(`O fatorial de 4 vale ${fatorial(4)}`)