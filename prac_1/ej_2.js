var numeros = [7,8,2,9,10];

var suma = 0;
var cuantos = 0;

for (var index = 0; index < numeros.length; index++) {
    if (numeros[index] > 8 ){
        cuantos ++;
        suma += numeros[index];
    }
}

alert("Hay " + cuantos + " mayores que 8  y su suma es : " +suma);