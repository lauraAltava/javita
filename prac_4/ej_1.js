
function añadir(){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Parrafo añadido");
    parrafo.appendChild(texto);
    document.getElementById("divisor").appendChild(parrafo);
}

function insertar(){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Parrafo insertado");
    parrafo.appendChild(texto);

    insertAfter(document.getElementById("divisor").getElementsByTagName("p")[0],parrafo);
}

function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}


function reemplazar(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Parrafo Reemplazado");
    parrafo.appendChild(texto);

    document.getElementById('divisor').replaceChild(parrafo,document.getElementById("divisor").getElementsByTagName('p')[1]); 
}


function borrar(){
    document.getElementById('divisor').removeChild(document.getElementsByTagName('p')[1]);
}

function clonarDiv(){
    var div = document.getElementById('divisor');
    var clon = div.cloneNode(true);

    document.body.appendChild(clon);
    
}