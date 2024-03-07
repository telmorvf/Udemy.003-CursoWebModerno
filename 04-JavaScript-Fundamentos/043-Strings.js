const escola = "Cod3r";

console.log(escola.charAt(3));        // 3
console.log(escola.charAt(5));        // null
console.log(escola.charCodeAt(3));    // CharCode HTML = 51
console.log(escola.indexOf('d'));     // 2

console.log(escola.substring(1));     // od3r
console.log(escola.substring(0,3));   // Cod 

console.log('Escola '.concat(escola).concat('!'));  // Escola Cod3r!
console.log(escola.replace(3, 'e'));                // Coder

console.log('Ana,Maria,Pedro'.split(','));    // [ 'Ana', 'Maria', 'Pedro' ]