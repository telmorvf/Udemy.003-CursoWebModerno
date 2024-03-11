// Antes
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
        // this.idade++
        // console.log(this.idade)
    }
    //.bind(this)     se retirar a constant self posso puxar o this para dentro da 2a funcao
    , 1000)
}
new Pessoa

// Depois com arrow o this já é reconhecido na 2a função
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa