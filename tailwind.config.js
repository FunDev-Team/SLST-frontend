module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'inter':['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'how-learn': "url('/public/BgHowLearn.png')",
       }),

       animate: Animation => ({
        'fadeIn' : "1s linear infinite"
       })
    },
  },
  
  plugins: [],
}
