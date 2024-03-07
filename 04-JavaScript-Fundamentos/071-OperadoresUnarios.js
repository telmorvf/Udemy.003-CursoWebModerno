// Operadores Unários

let num1 = 1;
let num2 = 2;

a = num1++                  // pós-fixada - 1º compara 2º soma
console.log(num1, a)        // 2, 1
num1 = 1;
b = ++num1                  // pré-fixada - 1º soma de+pois compara
console.log(num1, a, b)     // 2, 1, 2

--num1                      // pré-fixada
console.log(num1)

console.log(num1, num2);                    // 1, 2
console.log(++num1 === num2--);             // true 2 = 2
    //porque ++num1, primeiro soma depois compara
    //porque num2--, primeiro compara e depois subtrai
console.log(num1 === num2, num1, num2);     // false, 2, 1