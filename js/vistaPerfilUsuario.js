import { contengaSoloLetras, validarQueSeaCorreo, queContengaLetrasYNumeros, validarContrasenia, validarNumeroTarjeta, validarClaveCVV, validadorString } from "./formularioAux.js";
const formulario = document.querySelector(".formulario");

formulario.addEventListener("sumit",(e)=>{
    if(validarNuevaContrasenia && validarMetodosDePago){
       // datos a traer 
       let usuario = {
        contraseña: document.getElementById("nueva-contraseña").value,
        repetirContraseña: document.getElementById("repita-contraseña").value
       }
       localStorage.setItem(document.getElementById("email").value,JSON.stringify(user));
       formulario.submit();
    }else{
       e.preventDefault;
    }
})

function validarNuevaContrasenia(){

    let contrasenia = document.getElementById("nueva-contraseña").value;
    let repetirContraseña = document.getElementById("repita-contraseña").value;
    let contraseniasIguales = true;

    if(!(contrasenia == repetirContraseña)){
         alert("las contraseñas son distintas");
         contraseniasIguales = false;
    }
    return validarContrasenia(contrasenia) && validarContrasenia(repetirContraseña) && contraseniasIguales;

}

function validarMetodosDePago(){
    let tarjeta = document.getElementById("numero-tarjeta");
    let titular = document.getElementById("titular");
    let cvv = document.getElementById("cvv");

    if(cvv.toString().trim()==="000"){
        alert("error cvv no puede ser 000");
    }
    if(!validarNuevaContrasenia(tarjeta)){
        alert("error tarjeta no valida");
    }
    return validarNumeroTarjeta(tarjeta) && validadorString(titular) && validarClaveCVV(cvv);
}