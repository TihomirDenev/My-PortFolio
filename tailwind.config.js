import { DARK_THEME, LIGHT_THEME } from './src/common/constants';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [LIGHT_THEME, DARK_THEME],
  },
};
