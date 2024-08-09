/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
        fontFamily: {
           'montserrat-reg': ['"Montserrat Reg"'],
           'montserrat-500': ['"Montserrat 500"'],
           'montserrat-600': ['"Montserrat 600"'],
           'trade-gotic': ['"Trade Gothic"'],
           'trade-goticLT': ['"Trade Gothic LT"']
        }, backgroundImage: {
           'profile-banner': "url(./pages/UserProfile/profile-banner.png)",
           'back-landing-banner': "url(./pages/Landing/background.png)",
           'attractions': "url(./pages/Landing/attractions.png)",
           'guide': "url(./pages/Landing/guide.png)"
           
        }
    },
  },
  plugins: [],
}

