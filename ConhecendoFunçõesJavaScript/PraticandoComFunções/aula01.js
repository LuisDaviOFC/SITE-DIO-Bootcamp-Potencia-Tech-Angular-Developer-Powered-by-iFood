function escrevaMeuNome(nome){
    console.log('Meu nome é ' + nome)
}

function calcularIdade(anonascimento, anoatual) {
    return anoatual - anonascimento;
  }
  
  function souMaiorOuMenorDeIdade(calcularIdade, anonascimento, anoatual) {
    const idade = calcularIdade(anonascimento, anoatual);
    
    if (idade >= 18) {
      console.log('Sou Maior de Idade');
    } else {
      console.log('Sou Menor de Idade');
    }
  }

  
  escrevaMeuNome('Luis Davi')
  console.log('Tenho ' + calcularIdade(2000,2023) + ' Anos')
  souMaiorOuMenorDeIdade(calcularIdade, 2000, 2023);