function añadir(){
    var li = document.createElement('li');
    var texto = document.createTextNode("delfin");
    li.appendChild(texto);

    document.getElementById('lista').appendChild(li);
}

function insertar(){
    var li = document.createElement('li');
    var texto = document.createTextNode("caballo")
    li.appendChild(texto);

    insertAfter(document.getElementById('lista').getElementsByTagName('li')[0],li);

}

function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}

function reemplazar(){
    var li = document.createElement('li');
    var texto = document.createTextNode("Reemplazado animal");
    li.appendChild(texto);

    document.getElementById('lista').replaceChild(li,document.getElementById('lista').getElementsByTagName('li')[1]);
}

function borrar(){
    document.getElementById('lista').removeChild(document.getElementsByTagName('li')[0]);
}

function clonarLista(){
    var lista = document.getElementById('lista');
    var clon = lista.cloneNode(true);

    document.body.appendChild(clon);
}