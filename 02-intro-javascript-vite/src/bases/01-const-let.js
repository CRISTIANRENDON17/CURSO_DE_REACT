// ------------------------------------------
// Ejemplo: Scope y uso correcto de variables
// ------------------------------------------

// 🚫 No usar 'var'
// 'var' tiene alcance de función (function scope) y puede causar efectos colaterales no deseados
// ✅ Usar 'let' para variables que cambian y 'const' para constantes

// Declaración de constante
const nombre = 'Juan'; // 'const' se usa cuando la variable no se reasigna

// Declaración de variable que puede cambiar
let apellido = 'Pérez';

// Variable que será reasignada
let valorDado = 5;
valorDado = 4; // Reasignación permitida porque se declaró con 'let'

// Imprime valores actuales en el scope global
console.log('Global:', nombre, apellido, valorDado);

// ------------------------------------------
// Scope de bloque (dentro de un if, for, etc.)
// ------------------------------------------
if (true) {
  // Este 'valorDado' es una nueva variable, solo visible dentro de este bloque
  let valorDado = 5;
  console.log('Dentro del if - valorDado:', valorDado); // 5

  // Este 'nombre' también es una nueva variable en el scope de este bloque
  const nombre = 'Pedro';
  console.log('Dentro del if - nombre:', nombre); // Pedro
}

// Fuera del bloque, se mantienen los valores originales
console.log('Después del if - valorDado:', valorDado); // 4
