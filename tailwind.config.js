module.exports = {
  purge: [
  	'./src/**/*.html',
  	'./src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		primary: '#4D51C0',
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
