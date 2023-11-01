function numeroAleatorio(){
    var aleatorio = Math.floor(Math.random () * 2) + 1;
    

    if(numero.value == aleatorio){
        alert("Felicidades");
    }else{
        alert("Fallaste");
    }
}