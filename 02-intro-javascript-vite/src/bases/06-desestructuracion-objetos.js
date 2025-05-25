// === DESESTRUCTURACIÓN DE OBJETOS ===
// También conocida como asignación destructurante

const person = {
  name: 'Tony',
  clave: 'Ironman',
  edad: 45,
  address: {
    ciudad: 'New York',
    zip: 123456,
    lat: 14.1234,
    lng: 34.1234
  }
};

// Acceso tradicional a las propiedades
console.log(person.name);
console.log(person.clave);
console.log(person.edad);

console.log("-----------------");

// ✅ Desestructuración básica del objeto
const { name, clave, edad } = person;
console.log(name);
console.log(clave);
console.log(edad);

console.log("-----------------");

// ✅ Renombrando variables al desestructurar
const { name: nombre2, clave: clave2, edad: edad2 } = person;
console.log(nombre2);
console.log(clave2);
console.log(edad2);

console.log("-----------------");

// ✅ Desestructuración dentro de una función
const imprimirPersona = (usuario) => {
  const { name, clave, edad } = usuario;
  console.log(name);
  console.log(clave);
  console.log(edad);
}
imprimirPersona(person);

console.log("-----------------");

// ✅ Desestructuración directamente en los parámetros
// También se puede asignar un valor por defecto como "rango"
const imprimirPersona2 = ({ name, clave, rango = 'Capitán' }) => {
  console.log(name);
  console.log(clave);
  console.log(rango);
}
imprimirPersona2(person);

console.log("-----------------");

// ✅ Ejemplo avanzado: desestructuración anidada y retorno de objeto
const useContext = ({ name, clave, rango = 'Capitán', address }) => {
  return {
    nombreClave: clave,
    anios: person.edad,     // ⚠️ Se usa `person.edad` porque `edad` no se desestructuró aquí
    address                 // shorthand para: address: address
  };
};

// ⚠️ Ojo con los nombres: asegúrate de usar los correctos al desestructurar el retorno
const {
  nombreClave,
  anios,
  address: { ciudad, lat, lng },
  address
} = useContext(person);

console.log(lat, lng);                    // Coordenadas
console.log(nombreClave, anios, ciudad);  // Datos clave

console.log("-----------------");
