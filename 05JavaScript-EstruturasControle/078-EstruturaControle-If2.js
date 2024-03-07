function teste1(num) {
    if(num > 7)
        console.log(num)
    console.log('Final')
}
teste1(6)
teste1(8)
console.log()


function teste2(num) {
    if(num > 7); {      // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}
teste2(6)
teste2(8)
console.log()


function teste3(num) {
    if(num > 7) {      
        console.log(num)
    }; // No final já posso colocar, tal é qual como no C#
}
teste3(6)
teste3(8)