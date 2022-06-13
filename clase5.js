//const persona = {
//  nombre: 'Marcos',
//  edad: 25
// };

// persona.edad = 14;
// persona= {};


// function cambiarNumero (numero1) {
// numero1= 12;
// console.log(numero1);
// }

// const numero = 0;
//cambiarNumero(numero);
//console.log(numero);

// function cambiarObjeto(objeto) {
// objeto.edad = 2;
// console.log(objeto);
// }

// const persona = {
// nombre = 'Marcos',
// edad: 25
// };
//cambiarObjeto(persona);
console.log(persona);


/*
String
*/

// const str = 'hola';

//obtiene la longitud del string
console.log(str.length);

//obtiene el carácter de la posición 1
console.log(str.charAt(1));
console.log(str[1]);

//obtiene un carácter en una posición que no existe
console.log(str.charAt(4)); //''
sonsole.log(str[4]); //undefined

//obtiene el carácter de la última posición
const ultimaPosicion = str.length - 1;
console.log(str.charAt(ultimaPosicion));

//los strings son inmutables (no se pueden cambiar su valor)
str[0] = 'g'; //esto no tiene efecto
console.log(str); //hola

//para buscar un string dentro de otro string
console.log(str.indexOf('ha')); // - 1
console.log(str.indexOf('ho')); // - 1

//const str1= 'Apple, Banana, Kiwi';
const str1Porcion = str1.slice(0,2);
const str2Porcion = str1.slice(5);
console.log(str1Porcion);
console.log(str2Porcion)


// trim elimina espacios a izqda y dcha
const nombre = 'Marcos';
const nombreSinEspacios = nombre.trim();
console.log(nombre);
console.log(nombreSinEspacios);

/*
    Arrays
*/
console.log('-------Arrays------')
const numeros = [1, 2, 3, 6];

// obtiene la longitud del array
console.log(numeros.length);
console.log(numeros[2]);

//insertar al final
numeros.push(1);
console.log(numeros);

// insertar al principio
numeros.unshift(1000);
console.log(numeros);

// actualizar
numeros [3]= 100;
console.log(numeros);

//eliminar al final
numeros.pop();
console.log(numeros);

//eliminar al principio
numeros.shift();
console.log(numeros);

//splice sirve para
// -insertar
// -eliminar
// -insertar y eliminar al mismo tiempo

const frutas1= ['Banana', 'Orange', 'Apple', 'Mango'];
const frutasPorcion = frutas1.slice(0, 2)
console.log(frutas1);
console.log(frutasPorcion);

// iterar o recorrer un array --> obtenemos todos los elementos del array uno a uno
console.log('-- Antes del bucle --');
// a la derecha del for, siempre un array
for (const fruta of frutas1) {
    console.log(fruta);
}