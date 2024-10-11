


function calculateFactorial(number) {

    let result = 1; 

    for (let i = 1; i <= number; i++) {

        result *= i; 
    }

    return result; 
}

let input = prompt("Ingresa un número entero no negativo:");

let number = parseInt(input);


if (number >= 0) {

    const factorial = calculateFactorial(number);

    console.log("El factorial de " + number + " es: " + factorial );

} else {

    console.log("Por favor, ingresa un número entero no negativo.");
}
