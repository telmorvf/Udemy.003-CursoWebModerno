// Operadores Relacionais

console.log('01.', '1' == 1);       // true - valores são iguais
console.log('02.', '1' === 1);      // false - valores são extritamente iguais, string '1' <> number 1
console.log('03.', '3' != 3);       // false - valores são iguais 
console.log('04.', '3' !== 3);      // true - valores são extritamente diferentes, string '3' <> number 3  

console.log('05.', 3 < 2);          // false
console.log('06.', 3 > 2);          // true
console.log('07.', 3 <= 2);         // false
console.log('08.', 3 >= 2);         // true

const d1 = new Date(0)              // 01-January-1970
const d2 = new Date(0)  
console.log('09.', d1 === d2);      // false - estou a compara endereços de memória e não as datas
console.log('10.', d1 == d2);       // false - estou a compara endereços de memória e não as datas
console.log('11.', d1.getTime() === d2.getTime());       // true comparar valores extraidos pela função get

console.log('12.', undefined == null);     // true
console.log('13.', undefined === null);    // false