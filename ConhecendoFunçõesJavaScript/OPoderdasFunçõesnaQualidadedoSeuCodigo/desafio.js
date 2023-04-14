function calcularImc(peso, altura){
    return (peso / Math.pow(altura, 2)).toFixed(2);
}

function classificarIMC(imc){
if(imc < 18.50){
    return 'Abaixo do Peso';
}else if(imc >= 18.50 && imc < 25){
    return 'Peso Normal';
}else if(imc >= 25 && imc < 30){
    return'Acima do Peso';
}else if(imc >= 30 && imc < 40){
    return 'Obeso';
}else{
    return 'Obeso Grave';
}
}

function main(){
const peso = 60;
const altura = 1.70;
const imc = calcularImc(peso, altura);
console.log(classificarIMC(imc));
}

main()