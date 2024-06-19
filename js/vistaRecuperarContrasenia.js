import {esUnUsuarioValido } from "./formularioAux.js";

//primero a que elemento queremos agarrar para aniadirle la funcion que queremos
const formulario= document.querySelector(".formulario");
//le aniadimos el evento escuchaodr
formulario.addEventListener("submit", (e)=>{
    let email= document.querySelector("#email").value;
    let usuario= document.querySelector("#usuario").value;
    
    if(esUnUsuarioValido(email,usuario)){
     formulario.submit();
    }else{
        alert("ingreso invalido, revise email y usuario")
        e.preventDefault();
     }
     
 });

 /*
    mejorar experiencia de usuario marcando que envio el form 
    aunque sea reseteando luego los campos y permaneceindo en la pag
 */