"use strict"; 
// Activa el modo estricto de JavaScript para prevenir errores comunes.

function letras(frase) {
    let fraseArray = frase.split("");
    // Convierte la frase en un array de caracteres.
    return fraseArray.length;
    // Devuelve la cantidad total de caracteres en la frase.
};

function palabras(frase) {
    let fraseArray = frase.split(" ");
    // Convierte la frase en un array de palabras separadas por espacios.
    return fraseArray.length;
    // Devuelve la cantidad de palabras en la frase.
};

function maysc(frase) {
    let fraseMaysc = frase.toUpperCase();
    // Convierte todos los caracteres de la frase a mayúsculas.
    return fraseMaysc;
    // Devuelve la frase en mayúsculas.
};

function titulo(frase) {
    let fraseSeparada = frase.split(" ");
    // Divide la frase en un array de palabras.
    let fraseTitulo = fraseSeparada.map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
    ).join(" ");
    // Convierte la primera letra de cada palabra a mayúsculas y luego las une de nuevo en una frase.
    return fraseTitulo;
    // Devuelve la frase en formato de título.
};

function letrasReves(frase) {
    let fraseArray = frase.split("");
    // Convierte la frase en un array de caracteres.
    let fraseReves = fraseArray.reverse().join("");
    // Invierte el array de caracteres y lo vuelve a unir en una cadena.
    return fraseReves;
    // Devuelve la frase invertida carácter por carácter.
};

function palabrasReves(frase) {
    let fraseReves = frase.split(" ").reverse().join(" ");
    // Convierte la frase en un array de palabras, invierte el orden del array, y vuelve a unirlas en una frase.
    return fraseReves;
    // Devuelve la frase con el orden de las palabras invertido.
}

function limpiar(frase) {
    let fraseLimpia = frase.replace(/[^a-zA-Z]/g, "");
    // Elimina todos los caracteres que no sean letras (tanto mayúsculas como minúsculas) de la frase.
    return fraseLimpia;
    // Devuelve la frase con solo letras (sin espacios, números, ni caracteres especiales).
}

function palindromo(frase) {
    let fraseLimpia = limpiar(frase);
    // Limpia la frase, eliminando espacios y caracteres no alfabéticos.
    let fraseArray = fraseLimpia.split(" ").join("").toLowerCase();
    // Convierte la frase a minúsculas y elimina los espacios, para facilitar la comparación.
    let fraseReves = fraseArray.split("").reverse().join("");
    // Invierte la frase para compararla con su versión original.

    if (fraseArray === fraseReves) {
        return true;
    } else {
        return false;
    }
    // Devuelve true si la frase es un palíndromo, es decir, si se lee igual de derecha a izquierda que de izquierda a derecha.
}
