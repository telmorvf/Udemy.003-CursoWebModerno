// Operadores Destructuring do Função

function rand({ min = 0, max = 1000}) {     // Estou usando o operador destructuring
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}


console.log(rand({ max: 50, min: 40}));     // Estou usando um objecto a ser enviado para a função
//ou (são iguais)
const obj = { max: 50, min: 40}             // Crio o objeto
console.log(rand(obj));                     // Passo o valor para a função

console.log(rand({ min: 995 }));            // posso, porque existem default values na função
console.log(rand({}));                      // posso enviar sem o min e máximo, razão anterior

//console.log(rand());                      // ERRO não posso deixar de enviar o objeto
