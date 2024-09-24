frutas = ["Peras", "Manzanas", "Kiwis","Plátanos", "Mandarinas"];

// Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)

frutas = frutas.splice(1, 1);


// Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis,
// Plátanos, Naranjas, Sandía y Mandarinas)

frutas = frutas.splice(3, 0, "Naranjas", "Sandias");


// Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras,
// Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)

frutas = frutas.splice(1, 1, "Cerezas", "Nisperos");


// Indica el numero de palabras de una frase dada por el usuario

    // palabra = window.prompt("Escribe una frase");
    // cadena = palabra.split(" ");
    // alert("Tu frase tiene " + cadena.length + " palabras");


// Ordena los numeros

    let numeros = [10, 5, 20, 1];
    numeros.sort((a, b) => a - b);
    console.log(numeros); // [1, 5, 10, 20]


// Dado el array de notas anterior devuelve la nota media siempre y
// cuando todas las notas estén aprobadas, sino, devolverá un mensaje por
// pantalla que indique las notes que no han superado el 5

    alert("Introduce las notas");
    arrayNotas = window.prompt("Introducelas separados por un punto y coma");

    arrayNotas = arrayNotas.split(";"); // Separo las notas por el punto y coma

    for (let i = 0; i < arrayNotas.length; i++) { // Compruebo que sean numeros y los paso a float
        if (isNaN(arrayNotas[i]) && arrayNotas[i] < 10 && arrayNotas[i] > 0) {  // Si no es un numero lo borro
            arrayNotas.splice(i,1);
        }
        arrayNotas[i] = parseFloat(arrayNotas[i]); // Lo paso a numero
    };

    /* Otras opciones:
    1.
        arrayNota[];
        arrayNotas.forEach((nota) => arrayNota.push(parseFloat(nota)));
    2.
        arrayNotas2 = arrayNotas.map(nota => Number(nota));

    3.
        arrayNotas3 = arrayNota.map(nota => parseFloat(nota));
     */

    condicion = arrayNotas.every(nota => nota >= 5);  // Compruebo que TODOS cumplan la condicion de mayor que 5

    if (condicion) {
        let sumaNotas = arrayNotas.reduce((total,nota) => total += nota); // Sumo las notas para sacar la media
        notaMedia = sumaNotas/arrayNotas.length; // Saco la media
        alert ("Nota media " + notaMedia);
    } else {
        suspendidos = arrayNotas.filter(nota => nota < 5);  // Guardo los no aprobados en una variable para 
        alert("Notas menores que 5: " + suspendidos);       // mostrarla por pantalla
    }


    /*  Dado el array arr1 con los días de la semana haz un array arr2
    que sea igual al arr1. Elimina de arr2 el último día y comprueba que ha pasado
    con arr1. Repitela operación con un array llamado arr3 pero que crearás
    haciendo una copia de arr1. */

    arr1 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    arr2 = arr1;
    arr2.pop();
    alert (arr1);

    arr3 = arr1.slice();
    arr3.pop();
    alert(arr1);
