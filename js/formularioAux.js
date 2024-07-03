
export function enfocarInputs(inputs) {
    // Itera sobre el array de inputs
    for (let i = 0; i < inputs.length; i++) {
        // Si el input está vacío enfócalo
        if (inputs[i].value.trim() === "") {
            inputs[i].focus();
            break; // Detén el bucle después de enfocar el primer input vacío
        }
    }
}
export function validadorString(valorString) {

    return !(valorString == "");
}
//a esto lo llamo astuta la rata (?) 
export function enfocarInputsAnterior(inputs) {
    // Itera sobre el array de inputs
    for (let i = 0; i < inputs.length; i++) {
        // Si el input está vacío enfócalo
        if (inputs[i].value.trim() === "") {
            inputs[i-1].focus();
            break; // Detén el bucle después de enfocar el primer input vacío
        }
    }
}
export function validarClaveCVV(clave) {
    
    const validadorCVV = /^[1-9]{3}$/;
    
    if(clave=="000"){
        //done: MENSAJE DE ERROR SI SE COMPLETA CON 000 LA CLAVE TARJETA
        alert("error cvv no puede ser 000");
        return false;
    }
    if(clave=="" || !validadorCVV.test(clave)){
        alert("cvv invalido");
        return false;
    }


    return validadorCVV.test(clave);
}
export function validarNumeroTarjeta(tarjeta) {
    //valores
    const validadorTarjeta = /^[0-9]{16,19}$/;
    let sumaTotal = 0;
    let ultimoDigito = -1;

    //verificar si es numerico y tiene la longuitud pedida
    if (validadorTarjeta.test(tarjeta)) {
        //traer todos los numeros de la tarjeta
        for (let index = 0; index < tarjeta.length - 1; index++) {
            sumaTotal += parseInt(tarjeta[index]);
        }
        //traer el ultimo digito
        ultimoDigito = parseInt(tarjeta[tarjeta.length - 1]);
    }else{
        alert("Tarjeta invalida debe contener minimo 16 numeros");
    }

    //comparar 
    return ((sumaTotal % 2 === 0 && ultimoDigito % 2 !== 0) || (sumaTotal % 2 !== 0 && ultimoDigito % 2 === 0)) && validadorTarjeta.test(tarjeta);
}
export function contengaSoloLetras(string) {

    const expresionLetras = /^[A-Za-z]+$/;

    return expresionLetras.test(string);
}
export function queContengaLetrasYNumeros(valor) {

    const expresionLetrasYNumeros = /^[a-zA-Z0-9]+$/;

    return expresionLetrasYNumeros.test(valor);
}

export function validarUsuario(valor) {

    const expresionLetrasYNumeros = /^[a-zA-Z0-9]+$/;

    if(expresionLetrasYNumeros.test(valor)){
        return true;
    }else{
        alert("el campo <usuario> solo acepta letras y numeros");
        return false;
    }
}
export function validarTitular(valor) {

    if(contengaSoloLetras(valor)){
        return true;
    }else{
        alert("el campo <Titular> solo acepta letras");
        return false;
    }
}

export function validarQueSeaCorreo(correo) {

    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if( expresionCorreo.test(correo)){
        return true;
    }else{
            alert("no es un correo valido.\n example correo valido web@unlam.com");
        return false;
    }
}
export function validarContrasenia(contrasenia) {
    // debe contener almaenos dos letras mayusculas o minusculas, contener al menos dos digitos, dos caracteres alfanumericos y longitud minimo de 8 caract
    const validarRestrinciones = /^(?=.*[A-Za-z].*[A-Za-z])(?=.*\d.*\d)(?=.*[^A-Za-z0-9].*[^A-Za-z0-9]).{8,}$/;

    if( validarRestrinciones.test(contrasenia)){
        return true;
    }else{
        alert("contraseña invalida debe contener: \n 8 caracteres ( mínimo 2 letras, 2 números y 2 caracteres especiales) ");
    }
}

//REGISTRO VALIDACION PRIMERA PARTE
export function validarNombre(nombre) {
    const expresionLetras = /^[A-Za-z]+$/;

    if (expresionLetras.test(nombre)) {
        return true;
    } else {
        alert("El nombre solo puede contener letras");
        return false;
    }
}
export function validarApellido(apellido) {

    const expresionLetras = /^[A-Za-z]+$/;

    if(expresionLetras.test(apellido)){
        return true;
    }
    else{
        alert("el apellido solo puede llevar letras");
        return false;
    }
}


export function esUnUsuarioValido(email,usuario){
    let esValido=false;
    //comprobamos que exista
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuariosRegistrados.find(user => user.correo == email && user.usuario==usuario);

    if (usuarioExistente) {
        esValido=true;
    } else {
        alert("ingreso invalido, revise su email y usuario");
    }

    return esValido;

}

export function validarLogin(email,contrasenia){
    let esValido=false;
    //comprobamos que exista
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuariosRegistrados.find(user => user.correo == email && user.contrasenia==contrasenia);

    if (usuarioExistente) {
        esValido=true;
    } else {
        alert("ingreso invalido, revise su email y contraseña");
    }

    return esValido;
}

export function validarQueUnRadioEsteCheck(radios){
    let seleccionado = false;
    for (const radio of radios) {
        if (radio.checked) {
            seleccionado = true;
            break;
        }
    }
    return seleccionado;
}