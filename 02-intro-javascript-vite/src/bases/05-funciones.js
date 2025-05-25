// =========================

// === FUNCIONES EN JAVASCRIPT ===

// ✅ Declaración de función tradicional
function saludar(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar('Javier')); // "Hola Javier"

// ✅ Función anónima asignada a una constante
const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar2('Javier')); // "Hola Javier"

// ✅ Función de flecha con cuerpo de función
const saludar3 = (nombre) => {
  return `Hola ${nombre}`; 
}
console.log(saludar3('Javier')); // "Hola Javier"

// ✅ Función de flecha con retorno implícito
const saludar4 = (nombre) => `Hola ${nombre}`;
console.log(saludar4('Javier')); // "Hola Javier"

// ✅ Función de flecha sin argumentos, retorno implícito
const saludar5 = () => `Hola mundo`;
console.log(saludar5()); // "Hola mundo"

// ✅ Función de flecha que retorna un objeto (uso de paréntesis para retorno implícito de objeto)
const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});
console.log(getUser()); // { uid: 'ABC123', username: 'El_Papi1502' }

// === TAREA ===
// 1. Transformar a función de flecha
// 2. Retornar objeto implícito
// 3. Hacer pruebas

// 🔵 Versión original (función tradicional)
function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre
  }
}
const usuarioActivo = getUsuarioActivo('Javier'); 
console.log(usuarioActivo); // { uid: 'ABC567', username: 'Javier' }

// ✅ Versión transformada: función de flecha con retorno implícito de objeto
const getUsuarioActivo2 = (nombre) => ({
  uid: 'ABC567',
  username: nombre
});
const usuarioActivo2 = getUsuarioActivo2('Javier');
console.log(usuarioActivo2); // { uid: 'ABC567', username: 'Javier' }
