function hora(){
    var hori = new Date();

    if (hori.getHours() <= 14){
        var saludo = "buenos dias";
    }
    else if(hori.getHours() <= 20){
        var saludo = "buenas tardes";
    }
    else{
        var saludo = "buenas noches";
    }

    if(hori.getMinutes() < 10){
        var min = "0" + hori.getMinutes();
    }


    document.write(saludo + ", son las " + hori.getHours()+":"+min);
}
