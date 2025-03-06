/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-body": "url('@/../public/body_bg.png')",
        "login-body": "url('@/../public/login_bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
