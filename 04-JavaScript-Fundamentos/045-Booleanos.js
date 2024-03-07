let isAtivo = false;
console.log(isAtivo);       // false

isAtivo = true;
console.log(isAtivo);       // true

isAtivo = 1;
console.log(isAtivo);       // 1
console.log(!isAtivo);      // false (negação de 1 é false)
console.log(!!isAtivo);     // true (dupla negação de 1 é true)

console.log('Os verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ' );
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar');
console.log(!!('' || null || ' '));          // basta 1 ser true para dar true = ' '
console.log(('' || null || 'ola'  || 123));  // para na 1ª condição verdadeira ? ola
console.log(('' | null | 'ola'  | 123));     // testa todas as condições = 123

let nome = 'Lucas'
console.log('' || 'Desconhecido');     // Desconhecido
console.log(nome || 'Desconhecido');   // Lucas