// Operador condicional ternario


const isActive = true;

let menssage = '';

if (isActive) {
    menssage = 'El usuario está activo';
}else {
    menssage = 'El usuario no está activo';
}

console.log(menssage);


const menssage2 = ( !isActive ? 'El usuario está activo' : 'El usuario no está activo' );
console.log(menssage2);



const menssage3 = ( !isActive ? 'El usuario está activo' : null );
console.log(menssage3);

const menssage4 = isActive && 'Active'; // Si isActive es true, se asigna 'Active', de lo contrario, se asigna false
console.log(menssage4);

