import {esUnUsuarioValido } from "./formularioAux.js";

//primero a que elemento queremos agarrar para aniadirle la funcion que queremos
const formulario= document.querySelector(".formulario");
//le aniadimos el evento escuchaodr
formulario.addEventListener("submit", (e)=>{
    let email= document.querySelector("#email").value;
    let usuario= document.querySelector("#usuario").value;
    
    if(email=="" && usuario==""){
        alert("ingrese un email a recuperar");
        e.preventDefault();
        return;
    }

    if(esUnUsuarioValido(email,usuario)){
    alert("correo enviado");
    formulario.submit();
    }else{
        e.preventDefault();
     }
     
 });

const cancelar = document.getElementById("cancelar");

cancelar.addEventListener("click", ()=>{

    window.location.href="../Index.html"

});
