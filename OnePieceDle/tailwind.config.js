const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'back': "url('./assets/images/background.jpg')"
      }
    },
  },
  plugins: [],
})

