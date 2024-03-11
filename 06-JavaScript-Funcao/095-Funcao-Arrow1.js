// 1 exemplo
let dobro = function (a) {
    return 2 * a
}
// 2 exemplo
dobro = (a) => {
    return 2 * a 
}
// 3 exemplo
dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))


// 1 exemplo
let ola = function () {
    return 'Olá'
}
// 2 exemplo
ola = () => 'Olá'
// 3 exemplo
ola = _ => 'Olá' // possui um param

console.log(ola())