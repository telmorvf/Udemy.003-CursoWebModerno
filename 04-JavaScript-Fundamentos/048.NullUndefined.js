let valor;            // declarado mas não inicializada
console.log(valor);   // = undefined

valor = null;         // declarado e inicializada, mas está a nullo
console.log(valor);   // = null
// console.log(valor.toString());  // Erro

const produto ={};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);           // { preco: 3.5 }

produto.preco = undefined;      // evite atribuir undefined
console.log(!!produto.preco);   // false
// para ter de volta um objeto vazio o correto é usar o delete
//delete produto.preco;
console.log(produto);           // { preco: undefined }

produto.preco = null            // este produto está sem preço
console.log(!!produto.preco);   // false
console.log(produto);           // { preco: null }