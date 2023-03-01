/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				gray: '#828282',
				lightGray: '#CCCCCC',
				textColor: '#282828'
			},
			container: {
				center: true,
				padding: '20px'
			},
		},
  },
  plugins: [],
}