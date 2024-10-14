
// desestructuracion de objetos
// asignacion desestructurante

const person = {
    name:"Tony",
    age:45,
    key:"Iroman", 
    range:"soldado"
};

const { name:name2, name, age, key } = person;

console.log(person.name);
console.log(person.age);
console.log(person.key);


console.log( name );
console.log( name2 );
console.log(age);
console.log(key);

const returnPerson = ( user ) =>{

    const { name:name2, name, age, key } = user;
    console.log( name );
    console.log( name2 );
    console.log(age);
    console.log(key);

}

returnPerson ( person );



const returnPerson2 = ( { name, age, key, range = 'capi'} ) =>{

    console.log( name );
    console.log(age);
    console.log(key);
    console.log(range);

}

returnPerson2 ( person );


const UseContext = ( { name, age, key, range = 'capi'} ) =>{
   return{
    nameKey:key,
    ages:age,
    latlng: {
      lat:12.3434,
      lng:-11.343  
    },
   }
}

const { nameKey, ages, latlng:{lat,lng}, latlng:datalantg} = UseContext( person );

const { lng:lng2 } = datalantg;

console.log( nameKey, ages, lat, lng2);