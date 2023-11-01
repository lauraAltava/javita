function redimensionar() {
    
    var explorer = /Trident/.test(navigator.userAgent);

    if (explorer) {
     
        window.resizeTo(500, 500);
    } else {

        alert("Este no es Internet Explorer. La operación no está permitida.");
    }
}