import { validadorString, enfocarInputs } from "./formularioAux.js";

//primero a que elemento queremos agarrar para aniadirle la funcion que queremos
const formulario= document.querySelector(".formulario");
//le aniadimos el evento escuchaodr
formulario.addEventListener("submit", (e)=>{
    let email= document.querySelector("#email").value;
    let usuario= document.querySelector("#usuario").value;
    const inputs = document.querySelectorAll('.espacio');
    
    if(validadorString(email) && validadorString(usuario)){
     formulario.submit();
    }else{
     enfocarInputs(inputs);
     e.preventDefault();
     }
     
 });