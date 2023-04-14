const nota1 = 50;
const nota2 = 80;
const nota3 = 70;
const nota4 = 80;
const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media.toFixed(2));

if(media  <= 59.99){
    console.log("Nota F");
}else if(media >= 60.00 && media <= 62.99){
    console.log("Nota D-");
}else if(media >= 63.00 && media <= 66.99){
    console.log("Nota D");
}else if(media >= 67.00 && media <= 69.99){
    console.log("Nota D+");
}else if(media >= 70.00 && media <= 72.99){
    console.log("Nota C-");
}else if(media >= 73.00 && media <= 76.99){
    console.log("Nota C");
}else if(media >= 77.00 && media <= 79.99){
    console.log("Nota C+");
}else if(media >= 80.00 && media <= 82.99){
    console.log("Nota B-");
}else if(media >= 83.00 && media <= 86.99){
    console.log("Nota B");
}else if(media >= 87.00 && media <= 89.99){
    console.log("Nota B+");
}else if(media >= 90.00 && media <= 92.99){
    console.log("Nota A-");
}else if(media >= 93.00 && media <= 96.99){
    console.log("Nota A");
}else if(media >= 97.00 && media <= 100.00){
    console.log("Nota A+");
}else{
    console.log("Nota Invalida");
}