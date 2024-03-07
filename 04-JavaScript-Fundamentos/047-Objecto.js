// Um objeto é uma coleção chave e valor
const prod1 = {} 
prod1.nome ='Smartphone Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40      // evitar atributos com espaço

console.log(prod1);

const prod2 ={      
    nome: 'camisa',
    preco: 79.90
}
console.log(prod2);

// JSON - É um formato textual de um determinado objeto
// https://jsonlint.com/
//'{ "nome": "Camisa Polo", "preco": 79.90 }'

// posso ter n objetos dentro do objecto, podem ter o memo no
// desde que estejam dentro de objetos diferentes
const prod3 ={      
    nome: 'camisa3',
    preco: 99.99,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }

    }
}
console.log(prod3);
