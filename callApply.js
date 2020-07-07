function getPreco(imposto = 0 , moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // resultado R$ 18
console.log(produto.getPreco()) // resultado R$ 3900.65

// Executando a a partir do call e apply
const carro = { preco: 49990.0, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//com call pode passa contexto que no caso é "carro" e os  parametro
console.log(getPreco.call(carro, 0.17, '$'))
// com apply passa o contexto e um array com parametros
console.log(getPreco.apply(carro, [0.17, '$']))

