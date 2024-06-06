import { enfocarInputsAnterior } from "./formularioAux.js";
// traer el formulario a validar

const formulario = document.querySelector(".formulario");

//aniadirle un elemento escuchador

formulario.addEventListener("submit", (e)=>{

    const inputs = document.querySelectorAll('.espacio');

    //traer los campos a validar
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;

    let correo= document.getElementById("email").value;

    let usuario = document.getElementById("usuario").value;

    let contrasenia= document.getElementById("password").value;
    let repeatContrasenia = document.getElementById("repeatpassword").value;

    //verificar si los campos validados son correctos
    if(soloAceptaLetras(nombre)&& soloAceptaLetras(apellido) && validarQueSeaCorreo(correo) && aceptaLetrasYNumeros(usuario) && validarContrasenia(contrasenia) && contrasenia===repeatContrasenia){
        formulario.submit();
    }else{
        alert("valor invalido");
        e.preventDefault();
        enfocarInputsAnterior(inputs);
    }
    //si son correctos submitiar el form

});

function soloAceptaLetras(string){

    const expresionLetras=/^[A-Za-z]+$/;

    return string.match(expresionLetras)
}

function soloAceptaNumeros(numero){

    const expresionNumeros= /^[0-9]+$/;

    return numero.toString.match(expresionNumeros);
}

function aceptaLetrasYNumeros(valor){

    const expresionLetrasYNumeros= /^[a-zA-Z0-9]+$/;

    return valor.match(expresionLetrasYNumeros);
}

function validarQueSeaCorreo(correo){

    //valida que tenga arroba y termine en .com
    //ojo que lo saque de aca https://medium.com/@jgratereaux/validar-correos-electr%C3%B3nicos-con-expresiones-regulares-7914751b6018
    const validadorCorreo=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    return correo.match(validadorCorreo);
}

function validarContrasenia(contrasenia){

    const validarRestrinciones= /^(?=.*[A-Za-z].*[A-Za-z])(?=.*\d.*\d)(?=.*[^A-Za-z0-9].*[^A-Za-z0-9]).{8,}$/;

    return contrasenia.match(validarRestrinciones);
}