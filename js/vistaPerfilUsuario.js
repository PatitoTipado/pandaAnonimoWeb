import { contengaSoloLetras, validarQueSeaCorreo, queContengaLetrasYNumeros, validarContrasenia, validarNumeroTarjeta, validarClaveCVV, validadorString } from "./formularioAux.js";

// busco el email y la contraseña que se redistro
//const EMAIL = localStorage.getItem('email');
//document.getElementById('emailUsuario').innerHTML = `<p>${EMAIL} </p>`
//const CONTRASEÑARE = localStorage.getItem('repeatpassword');
//document.getElementById('contraseña').innerHTML = `<p>${CONTRASEÑARE} </p>`

let usuarioLo = localStorage.getItem("correoLogeado");
let contraseniaLo = localStorage.getItem("contraseñaLogeada");

document.getElementById("emailUsuario").innerHTML = `<p>${usuarioLo} </p>`;

// para ocultar y mostrar contraseña 
function mostrarOcultarContraseña(){
let contraseñaMostrar = document.getElementById("contraseña");
if( contraseñaMostrar.innerHTML === '*'.repeat(contraseniaLo.length) ){
      contraseñaMostrar.innerHTML = contraseniaLo;
}else {
    contraseñaMostrar.innerHTML = '*'.repeat(contraseniaLo.length);
}
}

document.getElementById("contraseña").innerHTML = `${'*'.repeat(contraseniaLo.length)}`;
//                                                    la contraseña no se muestre 
// la contraseña solo se oculta y si lo apretas se muestra pero no se vuelve a ocultar
//document.getElementById("contraseña").innerHTML =`${'*'.repeat(contraseniaLo.length)}`
//document.getElementById("contraseña").addEventListener('click',funcion ({
// para que se muestre ->this.innerHTML = contraseniaLo;})

document.getElementById("contraseña").addEventListener('click',mostrarOcultarContraseña  );

// primero creo una const que llame al formulario
const FORMULARIO = document.querySelector(".datos");

// creo un addEventListener 
FORMULARIO.addEventListener('submit',function (event){
    // evita enviar el form si no esta completado
  //  event.preventDefault();
    
    if(validarNuevaContrasenia() && validaeMetodosDePago()){
        //obtener los valores actualizados del form
        let contraNueva = document.getElementById('nueva-contraseña').value;
        let contreReNu = document.getElementById('repita-contraseña').value;
        let email = document.getElementById('emailUsuario').value;
        let tarjetaMP = document.getElementById("numero-tarjeta").value;
        let titularMP = document.getElementById("titular").value;
        let cvvMP = document.getElementById("cvv").value;
       // let emailMP = document.getElementById("emailUsuario").value;


        // creo temporalmente un objeto donde guardo los cambios
        let usuario =  {
            contraseña : contraNueva,
            reContraseña : contreReNu,
            tar : tarjetaMP,
            tit : titularMP,
            cv : cvvMP,
        }

        //guarda los datos en base de email
        localStorage.setItem(email,JSON.stringify(usuario));
        FORMULARIO.submit;
        alert('todos los datos fueron guardados correctamente')
    } else{
        alert('error : intente de nuevo ');
        event.preventDefault();
    }

   /* if(validaeMetodosDePago()){
        let tarjetaMP = document.getElementById("numero-tarjeta").value;
        let titularMP = document.getElementById("titular").value;
        let cvvMP = document.getElementById("cvv").value;
        let emailMP = document.getElementById("emailUsuario").value;

        let usu= {
            tar : tarjetaMP,
            tit : titularMP,
            cv : cvvMP,
        }

        localStorage.getItem(emailMP,JSON.stringify(usu))
        FORMULARIO.submit;
        alert('se mando')
    } else{
        alert('corrija los errores de metodos de pago');
        event.preventDefault();
    }*/
})
// validaciones ---------------------------------------------------------------------------------------------------
function validarNuevaContrasenia(){

      // llamo a los inputs que voy a necesitar 
      let contra = document.getElementById('nueva-contraseña').value;
      let recontra = document.getElementById('repita-contraseña').value;
      let contraValida = true;
      
      // validar que los campos no esten vacios;
      if(!contra || !recontra){
       alert('por favor, complete los campos de contraseña');
       //event.preventDefault();
       return false;
      }
  
      // valido que la contraseña sea correcta 
      // debe contener almaenos dos letras mayusculas o minusculas, contener al menos dos digitos, dos caracteres alfanumericos y longitud minimo de 8 caract
      // ejemplo de validar contraseña -> Abcde123!!
      if(!validarContrasenia(contra)){
          alert('error: la contraseña debe tener al menos dos mayusculas o minisculas , dos digitos,dos caracteres alfanumericos,longitud de 8 min)');
         return false;
      }
      if(contra !== recontra){
         alert('error: las contraseñas no coinciden ')
         return false;
      }
    
      return contraValida;
}

function validaeMetodosDePago(){
    let tarjeta = document.getElementById("numero-tarjeta").value;
    let titular = document.getElementById("titular").value;
    let cvv = document.getElementById("cvv").value;
   // let validar = true;
     
    if(!tarjeta || !titular || !cvv){
        alert('por favor complete los campos de metodo de pago');
        return false;
    }

    //ejemplo de velidar numero de tarjeta - 000111222333444555
    if(!validarNumeroTarjeta(tarjeta)  ){
        alert('error: el numero de tarjeta no tiene la longitud esperada ');
        return false;
    }

    if(!contengaSoloLetras(titular)){
        alert('error: solo se permiten letras');
        return false;
    }
    if(!validarClaveCVV(cvv)){
        alert('error: cvv no valido');
        return false;
    }

    
    
    return true;
}
