

function calculadoraIMC(){

    let peso = prompt("Introduce tu peso en kilogramos");
    let altura = prompt("Introduce tu altura en centimetros")

    let imc = peso/(altura*altura);
    let clasificacion;

        if(imc<=18.4){

            clasificacion = "Bajo peso";

        }else if (imc>18.4 && imc<=24.9){

            clasificacion = "Peso normal";

        }else if (imc>24.9 && imc<=29.9){

            clasificacion = "Sobrepeso"

        }else{

            clasificacion = "Obesidad"
        }

        console.log("IMC : " + imc.toFixed(2) + "Clasificacion: " + clasificacion);

}

calculadoraIMC();