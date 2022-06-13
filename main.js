/*
Escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios. 
*/

const gestor1 = {
    id: 1,
    usuario: 'gestor1',
    password: 'gestor1',
    correo: 'gestor1@mail.com'
}

const gestor2 = {
    id: 2,
    usuario: 'gestor2',
    password: 'gestor2',
    correo:'gestor2@mail.com'
}; 

const cliente1 = {
    id: 1,
    id_gestor: 1,
    usuario: 'cliente1',
    password: 'cliente1',
    saldo: 4300.56
};

const cliente2 = {
    id: 2,
    id_gestor: 1,
    usuario: 'cliente2',
    password: 'cliente2',
    saldo: Math.random() * 1000
};

const gestores = [gestor1, gestor2, {
    id: 3,
    usuario: 'gestor3',
    password: 'gestor3',
    correo:'gestor3@mail.com'
}];
 const cliente = [cliente1, cliente2];
 clientes.push ({
    id: 2,
    id_gestor: 1,
    usuario: 'cliente3',
    password: 'cliente3',
    saldo: 1230
 });

 //gestores es un array
 //gestor es un objeto con las propiedades: id, usuario, password, correo
 for (const gestor of gestores) {
    console.log('id: ${gestor.id}');
    console.log('usuario: ${gestor.usuario}');
    console.log('password:${gestor.password}');
    console.log('correo: ${gestor.correo}');
    console.log('-----');
 }

 console.log('--- CLIENTES ---');
for (const cliente of clientes) {
    console.log(`id: ${cliente.id}`);
    console.log(`id_gestor: ${cliente.id_gestor}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);
    console.log('-----');
}
const clientes = [];




// tods los gestores
console.log(gestores);

// primer gestor
console.log(gestores[0]);

//console.log(gestor2)
// console.table(cliente2)


