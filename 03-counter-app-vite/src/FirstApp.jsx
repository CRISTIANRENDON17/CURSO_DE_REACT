import PropTypes from 'prop-types';


// Objeto de prueba para mostrar en consola
const nombre = {
  message: 'Hola Mundo',
  title: 'Hola Mundo',
};

/**
 * Componente funcional que retorna un fragmento con mensaje y subtítulo.
 */
const MensajeSecundario = () => {
  return (
    <>
      <h2>Hola Mundo</h2>
      <p>Soy un subtítulo</p>
    </>
  );
};

/**
 * Componente principal de ejemplo.
 * @param {string} title - Título principal a mostrar.
 * @param {number} subTitle - Subtítulo numérico opcional.
 * otra forma es export const FirstApp = ({ title = "no hay titulo", subTitle=0 }) => {
 */
const FirstApp = ({ 
    title = "No hay título", 
    subTitle = 0, 
    name = "No hay name" 
}) => {
  return (
    <div className="row">
      {/* Mostrar objeto en formato JSON */}
      <code>{JSON.stringify(nombre)}</code>

      {/* Mensaje desde el objeto */}
      <h1>{nombre.message}</h1>

      <hr />

      {/* Componente de mensaje secundario */}
      <MensajeSecundario />

      <hr />

      {/* Props recibidas */}
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <h3>{name}</h3>
    </div>
  );
};

// Validación de props
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  title: 'No hay título2',
  subTitle: 1,
  name: 'Nombre por defecto2',
};

export default FirstApp;