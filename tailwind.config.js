/** @type {import('tailwindcss').Config} */
export default {
  // 1. Especificamos los archivos donde Tailwind buscará clases de CSS.
  // Esto le dice a Tailwind que escanee todos los archivos HTML y JS/JSX
  // dentro de la carpeta 'src' y sus subcarpetas.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 2. Aquí es donde puedes extender el tema de Tailwind
  // con tus propios colores, fuentes, etc. Por ahora lo dejamos por defecto.
  theme: {
    extend: {},
  },

  // 3. Aquí puedes añadir plugins de Tailwind si los necesitas en el futuro.
  plugins: [],
}
