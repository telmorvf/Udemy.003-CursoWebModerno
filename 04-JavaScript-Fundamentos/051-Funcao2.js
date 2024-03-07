// Armazenando uma Funcao numa varável
const imprimirSoma = function(a,b){
    console.log(a + b)
};
imprimirSoma(2, 3);                         // 5

// Armazenando uma Função arrow em uma variável
const soma = (a, b) => {
    return a + b
};
console.log(soma(2, 3));                    // 5

// Retorno Implicito
const subbtracao = (a, b) => a-b;
console.log(subbtracao(2, 3));              // -1

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!');                      // Legal!!!