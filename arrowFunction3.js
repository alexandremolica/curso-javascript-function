let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Arrow Function
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true 

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false pois não consegue mudar referencia a onde foi criado o this
comparaComThisArrow(module.exports) // true 



