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
           'trade-gotic': ['"Trade Gothic"']
        }, backgroundImage: {
           'profile-banner': "url(./pages/UserProfile/profile-banner.png)",
           
        }
    },
  },
  plugins: [],
}

