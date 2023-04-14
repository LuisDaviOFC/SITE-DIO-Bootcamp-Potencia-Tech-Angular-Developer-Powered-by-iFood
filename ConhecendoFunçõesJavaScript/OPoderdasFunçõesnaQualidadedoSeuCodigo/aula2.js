function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(200, 40))
console.log(incrementarJuros(900, 30))