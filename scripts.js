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

        let f_nombre = document.getElementById("f_nombre");
        let f_apellido = document.getElementById("f_apellido");
        let f_correo = document.querySelector("#f_correo");
        let paq1 = document.querySelector("#paq1");
        let paq2 = document.querySelector("#paq2");
        let paq3 = document.querySelector("#paq3");
        let paq4 = document.querySelector("#paq4");
        let paq5 = document.querySelector("#paq5");
        let opc1 = document.querySelector("#opc1");

        let p = document.createElement("p");
        p.innerHTML = f_nombre.value +" "+ f_apellido.value +" con email " + f_correo.value + " desea recibir informacion sobre: ";

        if (paq1.checked) {
            p.innerHTML += "Paquete educacion ";
        }
        if (paq2.checked) {
            p.innerHTML += "Paquete Juridico ";
        }
        if (paq3.checked) {
            p.innerHTML += "Paquete Clinico ";
        }
        if (paq4.checked) {
            p.innerHTML += "Paquete Laboral ";
        }
        if (paq5.checked) {
            p.innerHTML += "Consulta general";
        }

        p.innerHTML += opc1[0].checked?" Y le gustaria recibir info": "No quiere recibir info";
        
        document.getElementById("demo").appendChild(p);

    }
    return false; 
}

function validar(){
    let f_nombre = document.getElementById("f_nombre");
    let f_apellido = document.getElementById("f_apellido");
    let f_correo = document.querySelector("#f_correo");
    let paq1 = document.querySelector("#paq1");
    let paq2 = document.querySelector("#paq2");
    let paq3 = document.querySelector("#paq3");
    let paq4 = document.querySelector("#paq4");
    let paq5 = document.querySelector("#paq5");
    let opc1 = document.querySelector("#opc1");
    let errores = [];

    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "revert";
        
    }

    if(f_nombre.value.trim() == ""){
        errores.push("Nombre no puede ser vacio");
        f_nombre.style.border = "1px solid red";
    }
    
    let pattern = /^[A-Z]+$/i

    if (!pattern.test(f_nombre.value)) {
        errores.push("Por favor, ingrese solo letras")
        f_nombre.style.border = "1px solid red";
    }

    if(f_apellido.value.trim() == ""){
        errores.push("Apellido no puede ser vacio");
        f_apellido.style.border = "1px solid red";
    }
    if (!pattern.test(f_apellido.value)) {
        errores.push("Por favor, ingrese solo letras")
        f_apellido.style.border = "1px solid red";
    }

    let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!er.test(f_correo.value)) {
        errores.push("Ingrese un correo electronico valido");
        f_correo.style.border = "1px solid red";
        
    }

    if (!paq1.checked && !paq2.checked && !paq3.checked && !paq4.checked && !paq5.checked) {
        errores.push("Debe seleccionar al menos una opcion");
        paq1.parentNode.style.border = "1px solid red";
    }

    if (!document.querySelector('input[name="opciones"]:checked')) { 
        errores.push("Debe seleccionar si le gustaria o no");
        opc1.parentNode.style.border = "1px solid red";
    }


    let listaerrores = document.querySelector("#lista-errores");
    listaerrores.innerHTML = "";
    errores.forEach(e => {
        let li = document.createElement("li");
        li.innerHTML = e;
        listaerrores.appendChild(li);
        console.log(e);

    })



    return errores.length == 0;



}

