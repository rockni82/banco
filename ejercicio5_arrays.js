/*
Escribe un programa con un array que almacene los nombres de tres colores. A continuación, crea otro array vacío e inserta en él todos los elementos del primer array mediante un for...of y el método push.
*/

const colores = ['azul', 'negro', 'rojo'];
const coloresVacio = [];

//coloresVacio.push(colores);
//coloresVacio.push(colores[0], colores[1], colores [2], colores [3]);

 for(const color of colores) {
  console.log(color);
  coloresVacio.push(color);
 }

//coloresVacio.push(colores[0]);
//coloresVacio.push(colores[1]);
//coloresVacio.push(colores[2]);

console.log(colores);
console.log(coloresVacio);
