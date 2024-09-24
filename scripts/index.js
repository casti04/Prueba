"use strict"; // Activa el modo estricto de JavaScript

var frase = window.prompt("Introduce la frase:"); // Muestra una ventana emergente que solicita al usuario que introduzca una frase 

document.write(
    letras(frase) + " caracteres y " + palabras(frase) + " palabras <br>" +
    maysc(frase) + "<br>" +
    titulo(frase) + "<br>" +
    letrasReves(frase) + "<br>" +
    palabrasReves(frase) + "<br>"
);
// Muestra en el documento HTML los resultados de varias funciones aplicadas a la frase del usuario:
// 1. `letras(frase)` devuelve el número de caracteres
// 2. `palabras(frase)` devuelve el número de palabras en la frase
// 3. `maysc(frase)` convierte la frase a mayúsculas
// 4. `titulo(frase)` capitaliza la primera letra de cada palabra
// 5. `letrasReves(frase)` invierte la frase caracter por caracter
// 6. `palabrasReves(frase)` invierte el orden de las palabras en la frase

if (palindromo(frase)) {
    document.write("Si es un palindromo <br>");
} else {
    document.write("No es un palindromo <br>");
}
// Comprueba si la frase es un palíndromo 
// Si la función `palindromo(frase)` devuelve true, muestra "Si es un palindromo"; de lo contrario, muestra "No es un palindromo".

document.write(limpiar(frase));
// Muestra el resultado de la función `limpiar(frase)`