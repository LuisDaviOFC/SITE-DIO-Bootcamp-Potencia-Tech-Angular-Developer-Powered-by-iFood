const precoGasolina = 5.79;
const KmporLitro = 10;
const distanciaEmKm =  100;

const litrosConsumidos = distanciaEmKm / KmporLitro;
const valorGasto =litrosConsumidos * precoGasolina;

console.log("Quantidade de Litros Consumidos são: " + litrosConsumidos + " Litros");
console.log("O valor gasto de gasolina são: " + valorGasto.toFixed(2) + " Reais")
