function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)))
}

const precoEtiqueta = 100;
const formaDePagamento = 2;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(aplicarDesconto(precoEtiqueta, 10))
}