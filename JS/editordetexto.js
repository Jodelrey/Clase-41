// Editor de texto Hacer un programa que sea un mini editor de texto. El programa debe inicialmente pedir para ingresar un texto, luego debe preguntar qué es lo que queremos hacer. Opciones:
// "duplicar": duplicar el texto
// "reemplazar": reemplaza un string por otro en el texto
// "agregar": agregar texto
// "cortar": pide dos números de índice entre los cuáles recortar el texto
// "eliminar palabra": elimina una palbra del texto
// "buscar subtexto": busca un string dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "buscar palabra": busca una palabra dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "mayusculas": poner todo el texto a mayusculas
// "minusculas": poner todo el texto en minusculas
// "contar letras": mostrar cuántas letras tiene el texto sin espacios
// "contar palabras": mostrar cuántas palabras tiene el texto
// "h4ck3r 5p34k": convierte el texto en "Hacker Speak"
// Al elegir la opción debe mostrar el texto modificado y permitir seguir realizando acciones. Investigar métodos toUpperCase, toLowerCase, replace, includes, slice, substring.

const duplicarTexto = (text) => {
    return text + "\n" + text;
}

const reemplazarTexto = (original, reemplazo, text) =>{
    return text.replace(original, reemplazo);
}

const agregarTexto = (textoAAgregar, text) =>{
    const nuevoTexto = text + " " + textoAAgregar
    return nuevoTexto;
}

const cortarTexto = (indice1, indice2, text)=>{
    return text.substring(indice1, indice2)
}
const eliminarPalabra = (palabra, text) =>{
    let newArray = text.split(' ');
    let arrayAMostrar = [];
    let indicePalabra = newArray.indexOf(palabra);
    for (let i = 0; i < newArray.length; i++) {
        if(i!==indicePalabra){
            arrayAMostrar.push(newArray[i]);
        }
        
    }
    return arrayAMostrar.join(' ');
}

const buscarTexto = (text)=>{
    const subt = prompt("Ingrese el subtexto que desea buscar");
    if(text.includes(subt)){
        return `Se ha encontrado ${subt} dentro del texto`;
    } else{
        return `No se ha encontrado ${subt} dentro del texto`;
    }
}

const contarLetras = (text) =>{
    let cantidad = 0;
    for (let i = 0; i < text.length; i++) {
       if(text[i]!== " "){
           cantidad++;
       }
        
    }
    return cantidad;
}

const contarPalabras = (text) =>{
    const newArray = text.split(' ');
    return newArray.length;
}

const toHackerSpeak = (text) => {
    let arrayText = text.split('');
    for (let i = 0; i < arrayText.length; i++) {
       if(arrayText[i] === "a" || arrayText[i] === "A"){
          arrayText[i] = 4;
       } else if(arrayText[i] === "e"|| arrayText[i] === "E"){
           arrayText[i] = 3;
       } else if(arrayText[i] === "i"|| arrayText[i] === "I"){
           arrayText[i] = 1;
       } else if(arrayText[i] === "o"|| arrayText[i] === "O"){
           arrayText [i] = 0;
       } else if (arrayText[i] === "s" || arrayText[i] === "S"){
           arrayText[i] = 5;
       }
        
     }
    return arrayText.join('');
}


const text = prompt("Ingrese el texto que desea modificar");
let continuar = true;
while(continuar){
    const accion = prompt("Seleccione que modificiacion desea realizarle al texto: \n -Duplicar \n-Reemplazar \n -Agregar \n -Cortar \n-Eliminar palabra \n-Buscar subtexto \n-Buscar palabra \n-Mayusculas \n-Minusculas \n-Contar letras \n-Contar palabras \n-Hacker speak \n-Salir");
    switch(accion){
    case "Duplicar": 
        alert(duplicarTexto(text));
    break;
    case "Reemplazar":
        const original = prompt("Ingrese la palabra que desea reemplazar");
        const reemplazo = prompt("Ingrese con cual palabra desea reemplazarla");
        alert(reemplazarTexto(original, reemplazo, text));
        break;
    case "Agregar":
        const textoAAgregar = prompt("Ingrese el texto que desea agregar");
        alert(agregarTexto(textoAAgregar, text));
        break;
    case "Cortar":
        const indice1 = Number(prompt("Ingrese a partir de que indice desea cortar el texto"));
        const indice2 = Number(prompt("Ingrese hasta que indice desea cortar el texto"));
        alert(cortarTexto(indice1, indice2, text));
        break;
    case "Eliminar palabra":
        const palabra = prompt("Ingrese la palabra que desea eliminar");
        alert(eliminarPalabra(palabra, text));
        break;
    case "Buscar subtexto":        
        alert(buscarTexto(text));
        break;
    case "Buscar palabra": 
        alert(buscarTexto(text));
        break;
    case "Mayusculas":
        alert(text.toUpperCase());
        break; 
    case "Minusculas":
        alert(text.toLocaleLowerCase());
        break;
    case "Contar letras": 
        alert("El texto tiene " + contarLetras(text) + " letras");
        break;
    case "Contar palabras":
        alert("El texto tiene " + contarPalabras(text) + " palabras");
        break;
    case "Hacker speak":
        alert("El texto convertido es " + toHackerSpeak(text));
        break;
    case "Salir":
        continuar =false;
        break;
}
}