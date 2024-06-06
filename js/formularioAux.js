
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

    return !valorString == "";
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
export function validarQueSeaCorreo(correo) {

    //valida que tenga arroba y termine en .com
    //ojo que lo saque de aca https://medium.com/@jgratereaux/validar-correos-electr%C3%B3nicos-con-expresiones-regulares-7914751b6018
    const validadorCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    return validadorCorreo.test(correo);
}
export function validarContrasenia(contrasenia) {

    const validarRestrinciones = /^(?=.*[A-Za-z].*[A-Za-z])(?=.*\d.*\d)(?=.*[^A-Za-z0-9].*[^A-Za-z0-9]).{8,}$/;

    return validarRestrinciones.test(contrasenia);
}
