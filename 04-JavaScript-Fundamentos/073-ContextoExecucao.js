let a = 3;              // defini com let não fica no Global
console.log(global.a);  // undefined
console.log(this.a);    // undefined
console.log(a);         // 3
console.log();

global.b = 123;         // global = window   <== !!!
console.log(global.b);  // 123
console.log(this.b);    // undefined
console.log(b);         // 123
console.log();

this.c = 456;
this.d = false;
this.e = 'teste'
console.log(module.exports.c);          // 456
console.log(module.exports === this);   // true
console.log(module.exports);            // { c: 456, d: false, e: 'teste' }
console.log();

module.exports = { f: 456, g: false, h: 'teste' }

// Nunca fazer isto sem usar o var, let, const.
// Porque estou a colocar a variável no escopo global
abc =  69;
console.log(global.abc)             // 69
