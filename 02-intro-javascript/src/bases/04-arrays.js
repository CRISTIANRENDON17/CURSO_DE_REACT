
// arrays in JS

// const array = new Array( 100 );
// array.push(1);

const array = [1,2,3,4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

let array2 = [...array, 5]; // se clona y se agrega un nuevo parametro

let array3 = array2.map( data => data * 2); // recorrido map

console.log( array );

console.log( array2 );

console.log( array3 );
