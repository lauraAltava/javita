var mes = prompt("Mes: ");

switch(mes){
    case "diciembre":
    case "enero":
    case "febrero":
        alert("Invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        alert("Primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        alert("Verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        alert("Otoño");
        break;
    default:
        alert("No es un mes");
        break;

}