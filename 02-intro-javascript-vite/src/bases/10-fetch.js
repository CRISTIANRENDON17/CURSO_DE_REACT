// fetch-api.js

/**
 * API Key proporcionada por Giphy para autenticar las peticiones.
 * ⚠️ ¡No la compartas en entornos públicos o de producción sin protección!
 */
const apiKey = `t8hCdeqURFAe4bgezOO3HL2MMvHZ9BWN`;

/**
 * Realiza una petición HTTP a la API de Giphy para obtener un GIF aleatorio.
 * Utiliza la API `fetch` y encadena promesas para procesar la respuesta.
 */
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Petición encadenada con manejo de errores
peticion
    // Paso 1: Convertir la respuesta HTTP en un objeto JSON
    .then((resp) => resp.json())

    // Paso 2: Extraer el URL del GIF desde el objeto JSON
    .then(({ data }) => {
        const { url } = data.images.original;

        // Crear y mostrar la imagen en el DOM
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        // También se imprime el URL en la consola
        console.log(url);
    })

    // Paso 3: Manejar errores en la cadena de promesas
    .catch((err) => console.warn('Error al cargar el GIF:', err));
