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

    let clave = document.getElementById("cvv").value;

    let tarjeta = document.getElementById("numero-tarjeta").value;

    let titular= document.getElementById("titular").value;

    //verificar si los campos validados son correctos
    if(contengaSoloLetras(nombre)&& contengaSoloLetras(apellido) && validarQueSeaCorreo(correo) && queContengaLetrasYNumeros(usuario) && validarContrasenia(contrasenia) 
        && contrasenia==repeatContrasenia && validarClaveCVV(clave) && validarNumeroTarjeta(tarjeta) && contengaSoloLetras(titular)){
        formulario.submit();
    }else{
        alert("valor invalido");
        e.preventDefault();
        enfocarInputsAnterior(inputs);
    }
    //si son correctos submitiar el form

    //MENSAJE DE ERROR SI SE COMPLETA CON 000 LA CLAVE TARJETA

    //DEBE APARECER UN MENSAJE SIS SON DISTINTAS CONTRASENIAS 

    // mensaje de error si la tarjeta es invalida

});

function validarClaveCVV(clave){

    const validadorCVV= /^[1-9]{3}$/;

    return validadorCVV.test(clave);
}

function validarNumeroTarjeta(tarjeta) {
    //valores
    const validadorTarjeta = /^[0-9]{16,19}$/;
    let sumaTotal = 0;
    let ultimoDigito=-1;

    //verificar si es numerico y tiene una longirud pedida
    if (validadorTarjeta.test(tarjeta)) {
        //traer todos los numeros de la tarjeta
        for (let index = 0; index < tarjeta.length - 1; index++) {
            sumaTotal += parseInt(tarjeta[index]);
        }
        //traer el ultimo digito
        ultimoDigito = parseInt(tarjeta[tarjeta.length-1]);
    }  

    //comparar 
    return (sumaTotal % 2 === 0 && ultimoDigito % 2 !== 0)||(sumaTotal % 2 !== 0 && ultimoDigito % 2 === 0);
}

function contengaSoloLetras(string){

    const expresionLetras=/^[A-Za-z]+$/;

    return expresionLetras.test(string)
}

function queContengaLetrasYNumeros(valor){

    const expresionLetrasYNumeros= /^[a-zA-Z0-9]+$/;

    return expresionLetrasYNumeros.test(valor);
}

function validarQueSeaCorreo(correo){

    //valida que tenga arroba y termine en .com
    //ojo que lo saque de aca https://medium.com/@jgratereaux/validar-correos-electr%C3%B3nicos-con-expresiones-regulares-7914751b6018
    const validadorCorreo=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    return validadorCorreo.test(correo);
}

function validarContrasenia(contrasenia){

    const validarRestrinciones= /^(?=.*[A-Za-z].*[A-Za-z])(?=.*\d.*\d)(?=.*[^A-Za-z0-9].*[^A-Za-z0-9]).{8,}$/;

    return validarRestrinciones.test(contrasenia);
}