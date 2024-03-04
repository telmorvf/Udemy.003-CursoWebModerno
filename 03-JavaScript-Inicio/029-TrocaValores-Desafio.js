let a = 7;
let b = 94;

console.log("a = " + a);
console.log("b = " + b);

console.log("A trocar a com b ...");
let aux = a;
a = b;
b = aux;
// ou [a, b] = [b, a]

console.log("a = " + a);
console.log("b = " + b);
