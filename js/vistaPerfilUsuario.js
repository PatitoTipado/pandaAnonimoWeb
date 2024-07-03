import * as aux from "./formularioAux.js";
    // busco el email y la contraseña que se redistro
    //const EMAIL = localStorage.getItem('email');
    //document.getElementById('emailUsuario').innerHTML = `<p>${EMAIL} </p>`
    //const CONTRASEÑARE = localStorage.getItem('repeatpassword');
    //document.getElementById('contraseña').innerHTML = `<p>${CONTRASEÑARE} </p>`
    
    const usuario= localStorage.getItem("usuarioLogeado");
    const correo= JSON.parse(usuario).correo;
    const contrasenia= JSON.parse(usuario).contrasenia;
    
    document.getElementById("emailUsuario").innerHTML = `${correo}`;
    
    // para ocultar y mostrar contraseña 
    function mostrarOcultarContraseña(){
    let contraseñaMostrar = document.getElementById("contraseña");
    const mostrar = contrasenia;
    if( contraseñaMostrar.innerHTML === '*'.repeat(contrasenia.length) ){
          contraseñaMostrar.innerHTML = `${mostrar}`;
    }else {
        contraseñaMostrar.innerHTML = '*'.repeat(contrasenia.length);
    }
    }
    
    document.getElementById(`${JSON.parse(usuario).tarjeta}`).checked=true;

    document.getElementById("contraseña").innerHTML = `${'*'.repeat(contrasenia.length)}`;
    //                                                    la contraseña no se muestre 
    // la contraseña solo se oculta y si lo apretas se muestra pero no se vuelve a ocultar
    //document.getElementById("contraseña").innerHTML =`${'*'.repeat(contraseniaLo.length)}`
    //document.getElementById("contraseña").addEventListener('click',funcion ({
    // para que se muestre ->this.innerHTML = contraseniaLo;})
    
    document.getElementById("contraseña").addEventListener('click',mostrarOcultarContraseña  );
    
    // primero creo una const que llame al formulario
    const FORMULARIO = document.querySelector(".datos");
    const cancelar = document.getElementById("cancelar");

    cancelar.addEventListener("click", ()=>{

        let userLogeado= JSON.parse(localStorage.getItem("usuarioLogeado"));
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios'));
                
        let usuariosRegistradosActualizados= usuariosRegistrados.filter(user => user.correo!=userLogeado.correo);

        localStorage.setItem("usuarios",JSON.stringify(usuariosRegistradosActualizados));
        localStorage.removeItem("usuarioLogeado");

        alert ("suscripcion cancelada con exito, cerrando sesion");
        window.location.href="../index.html"

    });

    // creo un addEventListener 
    FORMULARIO.addEventListener('submit', (event)=>{
        // evita enviar el form si no esta completado
        //  event.preventDefault();
            
        if(validarNuevaContrasenia() ){
            FORMULARIO.submit;
            return
        }
        if(validarMetodosDePago()){
            FORMULARIO.submit;
            return
        }
        event.preventDefault();        
        
    })
    // validaciones ---------------------------------------------------------------------------------------------------
    function validarNuevaContrasenia(){
        
        // llamo a los inputs que voy a necesitar 
        let contra = document.getElementById('nueva-contraseña').value;
        let recontra = document.getElementById('repita-contraseña').value;
        let contraValida = false;
          
          // validar que los campos no esten vacios;
          if(contra=="" && recontra==""){
           return contraValida;
          }else{
              if(!aux.validarContrasenia(contra)){
                 return contraValida;
              }
              if(contra !== recontra){
                 alert('error: las contraseñas no coinciden ')
                 return contraValida;
              }
    
              if(aux.validarContrasenia(contra) && contra==recontra){
                contraValida=true;
                
                //cambios para user logeado
                let userLogeado= JSON.parse(localStorage.getItem("usuarioLogeado"));
                
                userLogeado.contrasenia=contra;
                
                //cambios para usuarios generales
                
                const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios'));
                
                const usuarioEncontrado = usuariosRegistrados.find(user => user.correo == userLogeado.correo);
                
                usuarioEncontrado.contrasenia=contra;
                
                let usuariosRegistradosActualizados= usuariosRegistrados.filter(user => user.correo!=userLogeado.correo);
                
                usuariosRegistradosActualizados.push(usuarioEncontrado);
                
                localStorage.setItem("usuarios",JSON.stringify(usuariosRegistradosActualizados));
                localStorage.setItem("usuarioLogeado",JSON.stringify(userLogeado));
                
                alert('cambio de contraseña exitoso')
            }
          }
        
          return contraValida;
    }
    
    function validarMetodosDePago(){
        let tarjeta = document.getElementById("numero-tarjeta").value;
        let titular = document.getElementById("titular").value;
        let cvv = document.getElementById("cvv").value;
        let tarjetaSeleccionada= document.querySelector('input[name="metodos-pago"]:checked');

       // let validar = true;
         
        if(tarjeta=="" && titular=="" && cvv==""){
            return false;
        }else{

            //ejemplo de velidar numero de tarjeta - 000111222333444555
            if(!aux.validarNumeroTarjeta(tarjeta)  ){
                return false;
            }
        
            if(!aux.validarTitular(titular)){
                return false;
            }
            if(!aux.validarClaveCVV(cvv)){
                return false;
            }
                
                let userLogeado= JSON.parse(localStorage.getItem("usuarioLogeado"));
                
                userLogeado.tarjeta=tarjetaSeleccionada.value;
                
                //cambios para usuarios generales
                
                const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
                
                const usuarioEncontrado = usuariosRegistrados.find(user => user.correo === userLogeado.correo);
                
                usuarioEncontrado.tarjeta=tarjetaSeleccionada.value;
                
                let usuariosRegistradosActualizados= usuariosRegistrados.filter(user => user.correo!=userLogeado.correo);
                
                usuariosRegistradosActualizados.push(usuarioEncontrado);                
                
                localStorage.setItem("usuarios",JSON.stringify(usuariosRegistradosActualizados));
                localStorage.setItem("usuarioLogeado",JSON.stringify(userLogeado));
                
                alert('cambio de tarjeta exitoso')

        }
        
        return true;
    }    
