//imports
import { contengaSoloLetras, validarQueSeaCorreo, queContengaLetrasYNumeros, validarContrasenia, validarNumeroTarjeta, validarClaveCVV } from "./formularioAux.js";
// traer el formulario a validar

const formulario = document.querySelector(".formulario");

//aniadirle un elemento escuchador

formulario.addEventListener("submit", (e)=>{

    if(validaRegistro() && validaMetodoDePago()){
        //traemos todos los datos que se usaran para validaciones
        let user= {usuario:document.getElementById("usuario").value,
            correo: document.getElementById("email").value,
            contrasenia:document.getElementById("password").value
        };
        //los guardamos
        localStorage.setItem(document.getElementById("email").value,JSON.stringify(user));
        formulario.submit();
    }else{
        e.preventDefault();
    }
});

//funciones que deben ir si o si en registro

function validaRegistro(){
    //variables del registro
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;

    let correo= document.getElementById("email").value;

    let usuario = document.getElementById("usuario").value;

    let contrasenia= document.getElementById("password").value;
    let repeatContrasenia = document.getElementById("repeatpassword").value;

    let contraseniasIguales=true;

    if(!(contrasenia==repeatContrasenia)){
        //done: aparece mensaje si son diferentes 
        alert ("Las contraseñas son distintas");
        contraseniasIguales=false;
    }

    return contengaSoloLetras(nombre)&& contengaSoloLetras(apellido) && validarQueSeaCorreo(correo) && queContengaLetrasYNumeros(usuario) && validarContrasenia(contrasenia) 
    && contraseniasIguales;
}

function validaMetodoDePago(){
    //variables de metodo de pago
    let tarjeta = document.getElementById("numero-tarjeta").value;
    
    let titular= document.getElementById("titular").value;
    
    let clave = document.getElementById("cvv").value;

    
    if(clave.toString().trim()==="000"){
        //done: MENSAJE DE ERROR SI SE COMPLETA CON 000 LA CLAVE TARJETA
        alert("error cvv no puede ser 000");
    }
    if(!validarNumeroTarjeta(tarjeta)){
        //done: mensaje de error si la tarjeta es invalida
        alert("error tarjeta no valida");
    }

    return validarNumeroTarjeta(tarjeta) && contengaSoloLetras(titular) && validarClaveCVV(clave);
}