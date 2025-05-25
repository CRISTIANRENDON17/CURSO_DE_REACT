// === Arreglos ===

// Crear un arreglo con 100 posiciones vacías.
// ⚠️ No se recomienda usar 'new Array()' salvo que necesites un tamaño definido inicial.
const arregloEjemplo = new Array(100);

// Agregar elementos al final del arreglo (sí se puede, pero ojo: no estás llenando las 100 posiciones iniciales)
arregloEjemplo.push(1);
arregloEjemplo.push(2);

console.log(arregloEjemplo); // Muestra el arreglo con 100 elementos: 98 vacíos, y al final 1 y 2.

// Crear un arreglo vacío con la forma más común y recomendada
const arregloEjemplo2 = [];

// Agregar elementos uno por uno. ⚠️ Comentario original decía "no usar", pero esto es perfectamente válido.
// Lo que sí se debe evitar es mutar arreglos originales cuando se quiere mantener inmutabilidad.
arregloEjemplo2.push(1);
arregloEjemplo2.push(2);
arregloEjemplo2.push(3);
arregloEjemplo2.push(4);
arregloEjemplo2.push(5);

console.log(arregloEjemplo2); // [1, 2, 3, 4, 5]

// Crear un arreglo directamente con valores iniciales
const arregloEjemplo3 = [1, 2, 3, 4];
console.log(arregloEjemplo3); // [1, 2, 3, 4]

// Crear un nuevo arreglo agregando elementos sin modificar el original (spread operator)
let arregloEjemplo4 = [...arregloEjemplo3, 5];
console.log(arregloEjemplo4); // [1, 2, 3, 4, 5]

// Crear una copia del arreglo usando map (aunque aquí no se está transformando nada)
const arregloEjemplo5 = arregloEjemplo4.map(data => {
  return data; // simplemente devuelve el mismo valor (copia superficial)
});
console.log(arregloEjemplo5); // [1, 2, 3, 4, 5]




// === AGREGAR ELEMENTOS ===

// ✅ Forma mutable (modifica el array original)
const numeros1 = [1, 2];
numeros1.push(3); // Agrega al final
numeros1.unshift(0); // Agrega al inicio
console.log('Mutable (push/unshift):', numeros1); // [0, 1, 2, 3]

// ✅ Forma inmutable (crea un nuevo array)
const numeros2 = [1, 2];
const nuevosNumerosFinal = [...numeros2, 3]; // Agrega al final
const nuevosNumerosInicio = [0, ...numeros2]; // Agrega al inicio
console.log('Inmutable (spread):', nuevosNumerosInicio); // [0, 1, 2]

// === ELIMINAR ELEMENTOS ===

// ✅ Forma mutable
const numeros3 = [1, 2, 3, 4];
numeros3.pop(); // Elimina el último
numeros3.shift(); // Elimina el primero
console.log('Mutable (pop/shift):', numeros3); // [2, 3]

// ✅ Forma inmutable (usando filter para eliminar un valor específico)
const numeros4 = [1, 2, 3, 4];
const sinTres = numeros4.filter(n => n !== 3); // Elimina el 3 sin tocar el original
console.log('Inmutable (filter):', sinTres); // [1, 2, 4]
console.log('Original:', numeros4); // [1, 2, 3, 4]
