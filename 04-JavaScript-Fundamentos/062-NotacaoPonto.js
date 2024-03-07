console.log(typeof console);
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
obj1['nome'] = 'Bola2';             // esta linha é equivalente à anterior
console.log(obj1);                  // Print: { nome: 'Bola2' }

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');       
console.log(obj2.nome);             // Print: Cadeira
console.log(obj3.nome);             // Print: Mesa
obj3.exec();                        // Print: Exec...