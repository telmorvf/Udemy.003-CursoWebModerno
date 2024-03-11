const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()  // Bom dia!
const falar = pessoa.falar
falar() // undefined: conflito entre paradigmas: funcional e OO

console.log()
// bind = vincular, para que possa usar o this
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()  // Bom dia!