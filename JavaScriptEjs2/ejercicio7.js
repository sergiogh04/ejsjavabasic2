


function convertirTemperatura() {


    let tipo = prompt("¿Qué tipo de conversión deseas? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):");


    if (tipo === "1") {

        let cel = prompt("Inserta la temperatura en grados Celsius:");

        let fah = (cel * 9 / 5) + 32; 

        console.log(cel + " grados Celsius equivalen a " + fah + " grados Fahrenheit.");

    } else if (tipo === "2") {

        let fah = prompt("Inserta la temperatura en grados Fahrenheit:");

        let cel = (fah - 32) * 5 / 9; 

        console.log(fah + " grados Fahrenheit equivalen a " + cel + " grados Celsius.");

    } else {
        console.log("Opción no válida.");
    }
}


convertirTemperatura();
