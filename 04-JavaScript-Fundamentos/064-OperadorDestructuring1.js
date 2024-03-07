// Operadores Destructuring
// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// usando o destructuring
// retirar os dados das chaves e valores de dentros dos objetos
const { nome, idade } = pessoa                          // retirar nome, idade do objecto pessoa
console.log(nome, idade)                                // Ana 5

const { nome: n, idade: i } = pessoa                    // Ana 5
console.log(n, i)                                       // retira atributos e gurdfa em n, i    

const {sobrenome, bemHumorada = true} = pessoa;        // undefined true
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep }} = pessoa;  // Rua ABC 1000 undefined
console.log(logradouro, numero, cep);

//const { conta : {ag, num }} = pessoa;
//console.log(ag, num);