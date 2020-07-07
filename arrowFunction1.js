//1
let dobro = function (a){
    return 2 * a
}

// equivalente em arrow function
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // retorno implicito

console.log(dobro(Math.PI))

//2
let ola = function(){
    return 'Olá'
}

// equivalente
ola = () => 'Olá'
ola = _ => 'Olá' // possui parametros
console.log(ola())
