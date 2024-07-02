import { validarLogin } from "./js/formularioAux.js";

//primero a que elemento queremos agarrar para aniadirle la funcion que queremos
const formulario= document.querySelector(".formulario");
//le aniadimos el evento escuchaodr
formulario.addEventListener("submit", (e)=>{
   let email= document.querySelector("#email").value;
   let contrasenia = document.querySelector("#password").value;

   if(validarLogin(email,contrasenia) ){
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios'));
    const usuarioLogeado = usuariosRegistrados.find(user => user.correo == email && user.contrasenia==contrasenia);
    localStorage.setItem("usuarioLogeado",JSON.stringify(usuarioLogeado));
    formulario.submit();
   }else{
    e.preventDefault();
    }
});
