import { validadorString, enfocarInputs } from "./formularioAux.js";

//primero a que elemento queremos agarrar para aniadirle la funcion que queremos
const formulario= document.querySelector(".formulario");
//le aniadimos el evento escuchaodr
formulario.addEventListener("submit", (e)=>{
   let email= document.querySelector("#email").value;
   let contrasenia= document.querySelector("#password").value;
   const inputs = document.querySelectorAll('.espacio');
   
   if(validadorString(email) && validadorString(contrasenia)){
    formulario.submit();
   }else{
    enfocarInputs(inputs);
    e.preventDefault();
    }
});


