// promesas.js

import { getHeroById } from "./bases/08-imp-expor";

/**
 * Simula una promesa básica que se resuelve después de 2 segundos
 * para demostrar el funcionamiento de `.then`, `.catch` y `.finally`.
 */
const basicPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa resuelta');
    }, 2000);
});

basicPromise
    .then((resultado) => console.log(`El resultado es: ${resultado}`))
    .catch((error) => console.log(`Error: ${error}`))
    .finally(() => console.log('La promesa ha finalizado'));

console.log("-----------------------------------------------");

/**
 * Promesa que intenta obtener un héroe por ID luego de 2 segundos.
 * En caso de no encontrarlo, se rechaza con un mensaje de error.
 */
const heroPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroById(10);
        console.log(hero);

        // Verificamos si el héroe existe
        if (!hero || Object.keys(hero).length === 0) {
            reject('No se encontró el héroe');
            return;
        }

        resolve(hero);
    }, 2000);
});

heroPromise
    .then((resp) => console.log(`El nombre del héroe es: ${resp.name}`))
    .catch((error) => console.log(`Error: ${error}`));

console.log("-----------------------------------------------");

/**
 * Devuelve una promesa que resuelve con el héroe correspondiente al ID dado.
 * @param {number} id - El ID del héroe a buscar.
 * @returns {Promise<Object>} Promesa que se resuelve con un héroe o se rechaza si no se encuentra.
 */
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);

            if (!hero || Object.keys(hero).length === 0) {
                reject(`No se encontró el héroe con ID ${id}`);
                return;
            }

            resolve(hero);
        }, 2000);
    });
};

// Ejecución de varias promesas para diferentes IDs de héroes
getHeroByIdAsync(1)
    .then((resp) => console.log(`El nombre del héroe es: ${resp.name}`))
    .catch((error) => console.log(`Error: ${error}`));

getHeroByIdAsync(10)
    .then((resp) => console.log(`El nombre del héroe es: ${resp.name}`))
    .catch((error) => console.log(`Error: ${error}`));

getHeroByIdAsync(2)
    .then((resp) => console.log(`El nombre del héroe es: ${resp.name}`))
    .catch((error) => console.log(`Error: ${error}`));
getHeroByIdAsync(2)
    .then( console.log)
    .catch(console.warn);

    