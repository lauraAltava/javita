var cadena = prompt("Introduce cadena: ");

var longitudCadena = cadena.length;
var mayusCadena = cadena.toUpperCase();
var minusCadena = cadena.toLowerCase();
var arrayCadena = cadena.split(" ");



document.write("La longitud de la cadena es " +longitudCadena+ " caracteres <BR>");
document.write("La cadena en mayusculas: <BR> " +mayusCadena+ "<BR>");
document.write("La cadena en minusculas: <BR> " +minusCadena+ "<BR>");
document.write("La cadena normal: <BR>");
for (var index = 0; index < arrayCadena.length; index++) {
    document.write(arrayCadena[index]+ "<BR>");
}
document.write("La cadena al revés: <BR>");
for (var index = arrayCadena.length - 1; index >= 0; index--) {
    document.write(arrayCadena[index]+ "<BR>");
}




