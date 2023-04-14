function dataatual(){
    return ano = new Date();
}

class Pessoa{
    nome;
    idade;
    sexo;
    anoDeNascimento;
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.anoDeNascimento = dataatual().getFullYear() - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, meu gênero é ${this.sexo} e nasci em ${this.anoDeNascimento} .`)
    }
}

function compararPessoas(){
    if(renan.idade >  vitor.idade){
        console.log(`${renan.nome} é mais velho que o ${vitor.nome}`)
    }else{
        console.log(`${vitor.nome} é mais velho que o ${renan.nome}`)
    }
}

const vitor = new Pessoa('Vitor', 25, 'Masculino');
const renan = new Pessoa('Renan', 30, 'Masculino');

vitor.descrever();
renan.descrever();
compararPessoas();