function fecha(){
    var dia = new Date();

    document.write("Hoy es " +dias[dia.getDay() - 1] + "," + dia.getDate() + " de " + 
    meses[dia.getMonth()] + " de " + dia.getFullYear() );
}


var dias = ['Lunes' , 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];