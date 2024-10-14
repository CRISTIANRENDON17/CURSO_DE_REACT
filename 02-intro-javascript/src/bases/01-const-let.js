// console.log("Hola mundo!!!");

// Variables y Constantes;

const name = 'Cristian';
let lastname = 'Rendon';

let valueDado = 5;
valueDado = 4;

console.log(name, lastname, valueDado);

if ( true ){
    let valueDado = 6; // mantine un scope
    const name = 'Peter';
    console.log(name, valueDado);
}

console.log(valueDado);

// var, No se debe de usar...