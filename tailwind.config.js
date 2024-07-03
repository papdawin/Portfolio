/** @type {import('tailwindcss').Config} */
import catppuccin from '@catppuccin/daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      // 'light',
      // // You can simply select a catppuccin flavor with sane default colors
      // catppuccin('latte'),
      // // Or you can optionally specify accent colors
      // catppuccin('frappe', 'pink'),
      // // Or you can optionally customize more semantic colors
      // catppuccin('macchiato', { primary: 'maroon' }),
      // // Values not explicitly defined will use default values
      catppuccin("macchiato", { primary: 'sky', secondary: 'rosewater' }),
    ],
  },
}

