// === Importación y Exportación de Módulos ===

// Importación del arreglo de héroes desde el módulo "./data/heroes"
import heroes, { owners } from "../data/heroes";

// Mostrar todos los héroes importados
console.log(heroes);

// === BÚSQUEDA POR ID ===

// Función que retorna una copia del héroe cuyo `id` coincida
export const getHeroById = (id) => {
    return { ...heroes.find(hero => hero.id === id) }; // Spread para crear un nuevo objeto (evitar referencias)
}

console.log(getHeroById(2)); // Heroe con ID 2

// Versión simplificada usando arrow function implícita
const getHeroById2 = (id) => heroes.find(hero => hero.id === id);

console.log(getHeroById2(3)); // Heroe con ID 3

// === BÚSQUEDA POR OWNER ===

// Función que retorna un arreglo con los héroes cuyo `owner` coincida
export const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

console.log(getHeroesByOwner('DC')); // Lista de héroes de DC

// Versión simplificada de la función anterior
const getHeroesByOwner2 = (owner) => heroes.filter(hero => hero.owner === owner);

console.log(getHeroesByOwner2('Marvel')); // Lista de héroes de Marvel

console.log("-----------------------------------------------"); 

owners.forEach(owner => {
    console.log(`Héroes de ${owner}:`);
    console.table(getHeroesByOwner(owner));
}
);
