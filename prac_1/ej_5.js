var precio = parseFloat(prompt("Precio: "));

precioIVA = precio * 0.21;
precioTotal = precioIVA + precio;


alert("El precio total es: " + precioTotal.toFixed(2));

