/**
 * getImagen
 * Función simple que retorna una URL estática de imagen como una promesa resuelta automáticamente.
 * Es útil para mostrar cómo una función async retorna implícitamente una promesa.
 */
const getImagen = async () => {
    // Este valor se "envuelve" automáticamente en una promesa
    return `https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png`;
}

// Consumimos la función y mostramos la URL en consola
getImagen().then(console.log); // Output: la URL del logo de Google

// ------------------------------------------------------------

/**
 * getImagen2
 * Esta función hace una petición HTTP a la API de Giphy para obtener un GIF aleatorio.
 * Utiliza `async/await` para escribir código asíncrono de forma más clara y secuencial.
 */
const getImagen2 = async () => {
    // Clave de API de Giphy (asegúrate de mantenerla segura)
    const apiKey = `nyJr8hVmZM2qBIzH3G4rcOStzt0INjhs`;

    try {
        // Hacemos la petición HTTP usando fetch
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        
        // Convertimos la respuesta a JSON
        const { data } = await resp.json();

        // Extraemos la URL de la imagen original del GIF
        const { url } = data.images.original;

        // Creamos una etiqueta <img> para mostrar el GIF en la página
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        // Mostramos la URL en la consola
        console.log(url);
        
    } catch (error) {
        // Capturamos y mostramos cualquier error durante la petición
        console.error('Error al obtener el GIF:', error);
    }
}

// Ejecutamos la función
getImagen2();

/*
const apiKey = `nyJr8hVmZM2qBIzH3G4rcOStzt0INjhs`;
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then((resp) => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(url);
    })
    .catch((err) => console.warn('Error al cargar el GIF:', err));
*/