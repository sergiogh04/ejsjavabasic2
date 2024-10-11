/*
    Un número primo es un número natural mayor que 1 que solo es divisible por sí mismo y
por 1. En otras palabras, un número primo tiene exactamente dos divisores: 1 y él mismo.
Por ejemplo, 2, 3, 5, 7, 11 son algunos ejemplos de números primos, ya que no tienen
otros divisores aparte de 1 y ellos mismos

*/ 


const n1 = parseInt(prompt("Inserta el primer número:"));

const n2 = parseInt(prompt("Inserta el segundo número:"));


let min = Math.min(n1, n2);
let max = Math.max(n1, n2);

console.log("Los números primos entre " + min + "y "  + max + "son: ");

for (let i = min; i <= max; i++) {
    
    if (i > 1) { 
        let primo = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            console.log(i);
        }
    }
}
