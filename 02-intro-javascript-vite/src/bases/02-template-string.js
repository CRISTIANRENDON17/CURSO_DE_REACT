// ------------------------------------------
// Ejemplo: Uso de Template Strings (plantillas literales)
// ------------------------------------------

// Template Strings permiten insertar variables y expresiones dentro de strings usando ${}

// Declaración de constantes
const nombre = "Javier";
const apellido = "Gonzalez";

// Ejemplo 1: Template multilínea (con saltos de línea)
const nombreCompletoMultilinea = `
${nombre}
${apellido}
${1 + 1}  // también se pueden incluir expresiones
`;

// Ejemplo 2: Template en una sola línea (más común para mensajes)
const nombreCompleto = `${nombre} ${apellido}`;

// Salida por consola
console.log('Nombre completo multilinea:', nombreCompletoMultilinea);
console.log('Nombre completo:', nombreCompleto);
console.log(`Hola ${nombre} ${apellido}`); // Interpolación directa en consola

// Función que retorna un saludo usando template string
function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

// Ejemplo de uso dentro de otro template string
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);
