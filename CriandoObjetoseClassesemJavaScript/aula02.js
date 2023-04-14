const pessoa = {
    nome: 'Luis Davi Vieira Silva',
    idade: 18,
    sexo: 'Masculino',
    descrever: function(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e o meu gênero é ${this.sexo}`)
    }
}

pessoa.descrever();