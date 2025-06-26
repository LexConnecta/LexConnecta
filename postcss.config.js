/**
 * postcss.config.js
 * * Este archivo de configuración es necesario para que PostCSS,
 * una herramienta que transforma CSS con plugins de JavaScript,
 * pueda procesar y aplicar Tailwind CSS a tu proyecto.
 */
export default {
  plugins: {
    // Para las versiones más recientes de Tailwind, el plugin se ha movido
    // a un paquete separado: '@tailwindcss/postcss'.
    '@tailwindcss/postcss': {},
    // El plugin de Autoprefixer, que añade prefijos de proveedor
    // (como -webkit- o -moz-) para asegurar la compatibilidad
    // con diferentes navegadores.
    autoprefixer: {},
  },
}
