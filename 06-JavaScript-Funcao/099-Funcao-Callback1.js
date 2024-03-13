const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)       // Passa o elemento e o indice no array
console.log()
fabricantes.forEach(fabricante => console.log(fabricante))
