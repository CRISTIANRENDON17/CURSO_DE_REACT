// Definición de un objeto literal con propiedades y métodos
const person = {
  name: 'Javier',
  lastName: 'Gonzalez',
  age: 30,
  email: 'cristianrendon1704@gmail.com',
  address: {
    city: 'Cali',
    country: 'Colombia',
  },
  getFullName() {
    return `${this.name} ${this.lastName}`;
  },
  getAddress() {
    return `${this.address.city}, ${this.address.country}`;
  },
};

// Acceso y visualización de propiedades del objeto
console.log(person);                  // Muestra todo el objeto
console.log(person.name);            // Accede mediante notación de punto
console.log(person['name']);         // Accede mediante notación de corchetes
console.log(person['age']);          // Otra propiedad por corchetes

// Diferentes formas de mostrar objetos en consola
console.log({ person: person });     // Forma explícita
console.log({ person });             // Forma abreviada (clave y valor tienen el mismo nombre)
console.table({ person });           // Muestra el objeto en forma de tabla

// Uso de métodos del objeto
console.log(person.getFullName());   // "Javier Gonzalez"
console.log(person.getAddress());    // "Cali, Colombia"

// Asignación por referencia: no es una copia, es el mismo objeto
const person2 = person;
console.log(person2);                // Cambios en person2 afectan a person

// Copia superficial del objeto: crea un nuevo objeto con los mismos valores
const person3 = { ...person };
console.log(person3);                // Es una copia independiente (shallow copy)
