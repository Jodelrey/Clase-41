// Ahorcado Crear el juego del ahorcado. El programa debe contar ya con una lista de posibles palabras. Debe mostrar inicialmente la palabra elegida aleatoriamente oculta con asteriscos, e ir preguntando por letras. A medida que se aciertan letras que contenga la palabra, se debe mostrar la palabra con las letras descubiertas. También se puede ingresar una palabra, pero si no se la adivina se pierde el juego. Si se adivinan todas las letras de la palabra, o se acierta la palabra, se gana. Si se intenta adivinar la palabra pero se equivoca, o se ingresan 6 letras erróneas, se pierde.


const listadoPalabras = ["jinete", "bandera", "apartarse", "finanzas", "colmillo", "etiqueta", "sacacorchos", "rastrillar", "amontonar", "escritorio"];

const palabraAAdivinar = (arr) =>{
    const indiceRandom = Math.round(Math.random() * (arr.length - 1));
    return arr[indiceRandom];
}

const mostrarPalabra = (texto, arr)=>{
    let newArray = texto.split('');
    if(arr.length>0){   
        for (let i = 0; i < newArray.length; i++) {
           if(arr.indexOf(newArray[i])===-1){
               newArray[i] = "*";
           }
        }
    } else {
        for (let i = 0; i < newArray.length; i++) {
            newArray[i]="*";
    }
} return newArray.join('');
}
let letras = [];

const palabra = palabraAAdivinar(listadoPalabras);
let perdio = false;
let gano = false;
alert("La palabra a adivinar es: " + mostrarPalabra(palabra, letras));
console.log(palabra);

while(letras.length<=5 && !perdio){
    let ingreso = prompt("Ingrese una palabra o letra, recuerde que solo tiene 6 intentos. Si ingresa la palabra y no acierta perdio el juego");   
    if(ingreso===null){
        perdio = true;
        alert(`No adivino la palabra, era ${palabra}, perdio`)
    }
    else if(ingreso.length===1){
        letras.push(ingreso);
        alert("Agregamos una pista: " + mostrarPalabra(palabra, letras));
    } else {
        if(ingreso===palabra){
             gano = true;
             perdio = true;
         } else{
             perdio = true;
             alert(`No adivino la palabra, era ${palabra}, perdio`)
         }        
    }  
}

if(gano){
    alert(`Adivino la palabra ${palabra} CAMPEON`);
} else if(letras.length>5){
    alert(`Agoto todos los intentos, la palabra era ${palabra}`);
}