
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
