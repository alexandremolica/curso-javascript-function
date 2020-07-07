
console.log(soma(3,4)) // nao dá erro, a function declaration pode ser usada antes da propria declaracao
//console.log(sub(3,4)) dá erro de compilacao tem que usar depois da declaracao da funcao 

//function declaration
function soma (x, y){
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3,4))

//named function expression
const mult = function mult (x, y){
    return x * y
}
