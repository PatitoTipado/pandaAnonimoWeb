import { validarLogin } from "./js/formularioAux.js";

//primero a que elemento queremos agarrar para aniadirle la funcion que queremos
const formulario= document.querySelector(".formulario");
//le aniadimos el evento escuchaodr
formulario.addEventListener("submit", (e)=>{
   let email= document.querySelector("#email").value;
   let contrasenia = document.querySelector("#password").value;

   if(validarLogin(email,contrasenia) ){
    localStorage.setItem("correoLogeado",email);
    localStorage.setItem("contraseñaLogeada",contrasenia);
    formulario.submit();
   }else{
    e.preventDefault();
    }
});

/* DO: agregar mensajes para mejorar la experiencia de usuario
* que pueda identificar en que campo se equivoco
* que pueda validar que esta equivocandose 
* que pueda validar que este haciendo bien el login
*/