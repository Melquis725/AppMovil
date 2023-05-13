/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*.html","*.css",
  "./node_modules/flowbite/**/*.js" 
],
  theme: {
    colors:{
      'gris' : '#efefef',
      'verde' : '#12b1bc',

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}