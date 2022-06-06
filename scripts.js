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

function enviar() {
    if (validar()){

    }
    return false; 
}

function validar(){
    let f_nombre = document.getElementById("f_nombre");
    let f_apellido = document.getElementById("f_apellido");
    let f_correo = document.querySelector("#f_correo");
    let paq2 = document.querySelector("#paq2");
    let paq3 = document.querySelector("#paq3");
    let paq4 = document.querySelector("#paq4");
    let paq5 = document.querySelector("#paq5");
    let opc1 = document.querySelector("#opc1")

    if(f_nombre.value == ""){
        console.log("Nombre no puede ser vacio");
    }
    let pattern = /^[A-Z]+$/i

    if (!pattern.test(f_nombre.value)) {
        console.log("Por favor, ingrese solo letras")
    }

    if(f_apellido.value == ""){
        console.log("Apellido no puede ser vacio");
    }
    if (!pattern.test(f_apellido.value)) {
        console.log("Por favor, ingrese solo letras")
    }

    let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!er.test(f_correo.value)) {
        console.log("Ingrese un correo electronico valido");
        
    }


    return true;



}

