// Par de ( Chave e Valor ) nome: 'Telmo'
const saudacao = 'Ola'          // contexto léxico 1

function exec(){
    const saudacao = "Viva!!!"  // contexto léxico 2
    return saudacao
}

// Objectos são grupos aninhados de pares - nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    ppeso: 90,
    endereco: {
        endereco1: 'Rui Porreira',
        numero: 123
    }
}

console.log(saudacao);      // Olá
console.log(exec());        // Viva!!!
console.log(cliente);       // imprime Objeto cliente    