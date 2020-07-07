class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

// factory tem ciencia do contexto lexico quando executada do browser
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
} 

const p2 = criarPessoa('João')
p2.falar()