console.log(typeof Object);             // function
console.log(typeof new Object());       // Object

const Client = function(){};            // Criei a minha própria função
console.log(typeof Object);             // function
console.log(typeof new Object());       // Object

class Product{};                        // ES 2015 (ES6) - criei o meu objecto
console.log(typeof Product);            // function
console.log(typeof new Product())       // object
