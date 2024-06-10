import { validadorString, enfocarInputs } from "./js/formularioAux.js";

//primero a que elemento queremos agarrar para aniadirle la funcion que queremos
const formulario= document.querySelector(".formulario");
//le aniadimos el evento escuchaodr
formulario.addEventListener("submit", (e)=>{
   let email= document.querySelector("#email").value;
   let contrasenia= document.querySelector("#password").value;
   const inputs = document.querySelectorAll('.espacio');
   
   //aca tuviera que darle alguna validacion de que el correo ya esta registrado en local y si lo esta
   if(validadorString(email) && validadorString(contrasenia) ){
    //aca tuviera que guardar en el local store el correo logeado ponerle un item especial, logeada - el email que se logeo 
    localStorage.setItem("correo",email);
    formulario.submit();
   }else{
    enfocarInputs(inputs);
    e.preventDefault();
    }
});