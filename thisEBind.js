const pessoa = {
    saudacao : 'Bom dia!',
    falar (){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO -- resultado undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // volta apontar para o objeto certo pelo uso do bind

