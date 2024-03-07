// Operadores Destructuring do Função

function rand([ min = 0, max = 1000 ]) {
    if (min > max) [min, max] = [max, min];      // se min > que max, então troca os valores
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));

console.log(rand([992]));       // só envio a primeira posição
console.log(rand([,10]));       // só envio a segunda posição
console.log(rand([]));          // envio array vazio
//console.log(rand());          // não é possível ler propriedades de undefined