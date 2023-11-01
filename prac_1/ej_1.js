var cuantos = 0;
var suma = 0;

for (var index = 0; index < 5; index++) {
var n = parseInt(prompt("Introduce 5 numeros: "));
   suma = suma + n;
   if (n > 100){
    cuantos++;
   }
    
}

alert("Suma: " + suma);
alert("Hay: " + cuantos);