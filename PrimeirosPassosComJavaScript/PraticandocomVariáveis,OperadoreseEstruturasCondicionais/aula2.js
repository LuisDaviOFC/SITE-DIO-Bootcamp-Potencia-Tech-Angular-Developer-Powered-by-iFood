const peso = 120;
const altura = 1.70;
const imc = (peso / Math.pow(altura,2)).toFixed(2);
console.log(imc);

if(imc < 18.50){
    console.log('Abaixo do Peso');
}else if(imc >= 18.50 && imc < 25){
    console.log('Peso Normal');
}else if(imc >= 25 && imc < 30){
    console.log('Acima do Peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else{
    console.log('Obeso Grave')
}