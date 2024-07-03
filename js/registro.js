//imports
import * as aux from "./formularioAux.js";
// traer el formulario a validar

const formulario = document.querySelector(".formulario");

//aniadirle un elemento escuchador

formulario.addEventListener("submit", (e)=>{

    if(validaRegistro() && validaMetodoDePago()){
        //traemos todos los datos que se usaran para validaciones
        //los guardamos
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        const correoExistente = usuariosRegistrados.find(usuario => usuario.correo === document.getElementById("email").value);
        const usuarioExistente = usuariosRegistrados.find(usuario => usuario.usuario===document.getElementById("usuario").value);

        if(usuarioExistente){
            alert("este usuario ya existe")
            e.preventDefault();
            return;
        }else if(correoExistente){
            alert("este correo ya existe");
            e.preventDefault();
            return;
        }else{
            const nuevoUsuario = {
                usuario: document.getElementById("usuario").value,
                correo: document.getElementById("email").value,
                contrasenia:document.getElementById("password").value,
                tarjeta: document.querySelector('input[name="credito-debito"]:checked').value
            };

            usuariosRegistrados.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

            alert("usuario registrado");
            formulario.submit();    
        }
    }else{
        e.preventDefault();
    }

});

const cancelar = document.getElementById("cancelar");

cancelar.addEventListener("click", ()=>{

    window.location.href="../Index.html"

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

    return aux.validarNombre(nombre) && aux.validarApellido(apellido) && aux.validarQueSeaCorreo(correo) && aux.validarUsuario(usuario) && aux.validarContrasenia(contrasenia) 
    && contraseniasIguales;
}

function validaMetodoDePago(){
    //variables de metodo de pago
    let tarjeta = document.getElementById("numero-tarjeta").value;
    
    let titular= document.getElementById("titular").value;
    
    let clave = document.getElementById("cvv").value;

    const metodoDePago = document.querySelectorAll('input[name="credito-debito"]');
    let emisorTarjeta= document.querySelectorAll('input[name="visa-mastercard-cabal"]'); 
    if(!aux.validarQueUnRadioEsteCheck(metodoDePago)){
        alert ("seleccione una tarjeta");
        return false;
    }

    if(!aux.validarQueUnRadioEsteCheck(emisorTarjeta)){
        alert ("seleccione un emisor de tarjeta");
        return false;
    }

    if(!aux.validarNumeroTarjeta(tarjeta)){
        //done: mensaje de error si la tarjeta es invalida
        alert("error tarjeta no valida");
    }

    return aux.validarNumeroTarjeta(tarjeta) && aux.validarTitular(titular.trim()) && aux.validarClaveCVV(clave);
}

/*
    DONE:
    mejorar la experiencia de usuario
    verificando que hizo bien el registro
    que lo hizo mal
    que pueda distinguir el campo o en que sector la pifio
*/