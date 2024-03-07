// Operadores Lógicos

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    // são iguais
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // retorna objeto
    // Simplificado com = ES 2015
    //return {comprarSorvete: comprarSorvete, comprarTv50: comprarTv50 ...}
}
                                        // Sorv? Tv50? Tv32? Saud?
console.log(compras(true, true));       // true  true  false false 
console.log(compras(true, false));      // true  false true  false
console.log(compras(false, true));      // true  false true  false
console.log(compras(false, false));     // false false true  false

console.log(!!('' || null || ' '));          // basta 1 ser true para dar true = ' '
console.log(('' || null || 'ola'  || 123));  // para na 1ª condição verdadeira ? ola
// só um | ou só um &
console.log(('' | null | 'ola'  | 123));     // testa todas as condições = 123