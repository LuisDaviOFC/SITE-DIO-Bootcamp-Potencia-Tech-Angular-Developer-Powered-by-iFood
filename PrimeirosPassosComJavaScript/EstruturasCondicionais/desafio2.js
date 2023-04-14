const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmporLitro = 10;
const distanciaEmKm =  100;
const tipoCombustivel = 'Etanol';

if(tipoCombustivel === 'Etanol'){
    const litrosConsumidos = distanciaEmKm / kmporLitro;
    const valorGasto =litrosConsumidos * precoEtanol;
    console.log("Quantidade de Litros Consumidos são: " + litrosConsumidos + " Litros");
    console.log("O valor gasto de gasolina são: " + valorGasto.toFixed(2) + " Reais");
}else if(tipoCombustivel === 'Gasolina'){
    const litrosConsumidos = distanciaEmKm / kmporLitro;
    const valorGasto =litrosConsumidos * precoGasolina;
    console.log("Quantidade de Litros Consumidos são: " + litrosConsumidos + " Litros");
    console.log("O valor gasto de gasolina são: " + valorGasto.toFixed(2) + " Reais");
}else{
    console.log("Dado Indisponivel!")
}