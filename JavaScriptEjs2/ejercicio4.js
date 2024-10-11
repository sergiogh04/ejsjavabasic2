

function calcularDescuento(){

    let precio = prompt("introduce el precio del producto");

    let descuento = prompt("introduce el descuento que quieras aplicarle")

    

    let productoDescontado = (precio * descuento)/100;
    let precioFinal = precio - productoDescontado;
    
    console.log("El precio final del producto despues de aplicar el descuento del " + descuento + "%" + "es : " + precioFinal);



}

calcularDescuento();