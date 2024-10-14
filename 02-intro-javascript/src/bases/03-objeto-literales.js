//  onjetos lirerales

const person = {
    name:"tonny",
    lastname:"stark",
    age:45,
    address:{
        city:"new yuork",
        zip:34352323,
        lat:12.23232,
        lng:232323,
    }
};

console.table( person );
console.log( {person} );

// no hacerlo asi porque no copio el objeto sino la direccion de memoria
// const person2 = person;
const person2 = { ...person };
person2.name = "peter";

console.table( person2 );
console.log( {person2} );

console.table( person );
console.log( {person} );