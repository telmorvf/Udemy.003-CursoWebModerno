let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true - no contexto do runtime o this é estritamente igual a global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)