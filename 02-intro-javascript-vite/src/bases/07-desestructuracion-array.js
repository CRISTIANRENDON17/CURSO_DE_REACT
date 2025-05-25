// === DESESTRUCTURACIÓN DE ARREGLOS ===

const personajes = ['Goku', 'Vegeta', 'Trunks', 'Gohan', 'Piccolo', 'Bulma', 'Krillin', 'Freezer'];

// Acceso tradicional por índice
console.log(personajes);
console.log(personajes[0]); // Goku
console.log(personajes[1]); // Vegeta
console.log(personajes[2]); // Trunks

console.log("------------------------------");

// ✅ Desestructuración: extraer elementos individuales del arreglo
// Nota: se pueden omitir elementos con comas vacías
const [p1, p2, p3, , p5, , , p8] = personajes;

console.log(p1); // Goku
console.log(p2); // Vegeta
console.log(p3); // Trunks
console.log(p5); // Piccolo
console.log(p8); // Freezer

console.log("------------------------------");

// ✅ Desestructuración de valores retornados desde una función
const retornoArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornoArreglo();
console.log(letras);  // ABC
console.log(numeros); // 123

console.log("------------------------------");

// === TAREA: Simulación de useState en React ===

// 1. Crear una constante llamada useState
// 2. Esta función retorna un arreglo con dos valores:
//    - El valor recibido como argumento
//    - Una función que imprime "Hola Mundo"
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola Mundo');
    }
  ];
}

// Versión básica: sin desestructurar
const arr = useState('Goku');
console.log(arr);       // ['Goku', [Function]]
console.log(arr[0]);    // Goku
arr[1]();               // Hola Mundo

console.log("------------------------------");

// ✅ Desestructuración del arreglo retornado por useState
// Simulando sintaxis típica de React: [state, setState]
const [nombre, setNombre] = useState('Goku');
console.log(nombre);    // Goku
setNombre();            // Hola Mundo
