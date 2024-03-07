const nome = "Rebeca";
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

// expressões
console.log(`1 + 1 = ${1 + 1}`);

// Criada a função up, faz o mesmo que toUpperCase function
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
