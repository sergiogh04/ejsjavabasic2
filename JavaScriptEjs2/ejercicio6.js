function fibonacci() {

    
    
    let n = parseInt(prompt("Inserta el número de términos de la secuencia Fibonacci:"));


    let a = 0;
    let b = 1;

    console.log("Los primeros" + n + "términos de la secuencia Fibonacci son:");

    for (let i = 0; i < n; i++) {

        if (i === 0) {

            console.log(a); 

        } else if (i === 1) {

            console.log(b); 

        } else {

            let sec = a + b; 
            console.log(sec); 
             a = b; 
            b = sec; 
        }
    }
}

fibonacci(); 


