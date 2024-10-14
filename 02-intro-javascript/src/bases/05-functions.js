/* // funciones en js

/* function saludar( nombre ){
    return `Hola, ${ nombre }`;
}
 */

    // Constante function
const saludar = function( nombre = 'Goku' ){
    return `Hola, ${ nombre }`;
}

    // Funcion flecha
const saludar2 = ( nombre = 'Vegetta' ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre = 'Bulma') => `Hola, ${ nombre }`;

const saludar4 = () => `Hola, mundo`;


console.log( saludar() ); 

console.log( saludar2('Vegetta') ); 

console.log( saludar3('Bulma') ); 

console.log( saludar4() ); 

const getUser = () =>{
    return{
        uid:'ABC123',
        username:'El_papi1502',
    }
}

console.log( getUser() );

// convertirlo a un objeto
const getUser2 = () =>
    ({
        uid:'ABC123',
        username:'El_papi1502',
    })

console.log( getUser2() );

const user = getUser();
console.log( user );

// task
// 1. Transformar a una funcion flecha
// 2. TIene que retornar un objeto implicito
// 3. pruebas
function getUserActive( name ){
    return {
        uid : 'ABCE567',
        username: name
    }
}

const userActive = getUserActive('Cristian');

console.log( userActive );

// ---------------------- respose --------------------

const userActive2 = ( name ) => (
    {
        uid : 'ABCE567',
        username: name
    }
);

console.log( userActive2("cristian") );