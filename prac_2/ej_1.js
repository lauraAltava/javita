


function calcularPrecio(){
    var precio = parseFloat(prompt("Precio: "));

    precioConIva = precio * 0.21;

    precioTotal = precioConIva + precio;

    alert("Precio total: " + precioTotal.toFixed(2));

}

calcularPrecio();