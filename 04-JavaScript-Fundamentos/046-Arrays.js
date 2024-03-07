const valores = [7.7, 8.9, 6.3, 9.2]        // Indices 0, 1, 2, 3

console.log(valores[0], valores[3]);        // 7.7 9.2
console.log(valores[4]);                    // undefined
console.log(valores);                       // [ 7.7, 8.9, 6.3, 9.2 ]
console.log(valores.length);                // 4 elementos

valores[4] = 10
console.log(valores);                       // [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length);                // 5 elementos

valores.push({id: 3}, false, null, 'teste');    // Tipagem Fraca
console.log(valores);           // [ 7.7, 8.9, 6.3, 9.2, 10, {id: 3}, false, null, 'teste' ]


console.log(valores.pop());     // retira o último valor do array
delete valores[0];              // apaga o valor no indice 0
console.log(valores);           // [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]
console.log(typeof valores);    //array é tipo OBJECT no JavaScript