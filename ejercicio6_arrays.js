/*
Escribe un programa que dado dos arrays de números, devuelva el número de elementos que son iguales. 
*/

const numeros1 = [10, 11, 12];
const numeros2 = [11, 12, 13];


//iterar el aary numeros1
let contador = 0;

for (const numero1 of numeros1) {
    console.log(numero1, numeros2.includes(numero1)); 
    if(numeros2.includes(numero1)) {
        console.log('Coincidente');
        contador++;
    }
}

console.log(contador)