var index = 0;

mostrarImg(index);

function mostrarImg (posicionImg) {
    let imagenes = document.getElementsByClassName("img"); 
    console.log(imagenes);
    if (posicionImg == imagenes.length) {
        index = 0;
    } 
    if (posicionImg < 0) {
        index = imagenes.length - 1;
        
    }
    for (let i = 0; i < imagenes.length; i++) {
        if (i == index) {
            imagenes[i].style.display = "block";
        } else {
            imagenes[i].style.display = "none";
        }

    }  
}

function recorrido (num){

    index += num;

    mostrarImg(index);

}
