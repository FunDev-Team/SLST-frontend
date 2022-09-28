module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'inter':['Inter', 'sans-serif']
    },
    extend: {

       animate: Animation => ({
        'fadeIn' : "1s linear infinite"
       })
    },
  },
  
  plugins: [],
}
