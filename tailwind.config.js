import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'paper-body-shadow': '0 10px 0 0 hsl(230, 53%, 36%)',
        'rock-body-shadow': '0 10px 0 0 hsl(349, 61%, 33%)',
        'scissors-body-shadow': '0 10px 0 0 hsl(40, 70%, 31%)',
        'spock-body-shadow': '0 10px 0 0 hsl(189, 58%, 32%)',
        'lizard-body-shadow': '0 10px 0 0 hsl(261, 52%, 45%)',
      },
      backgroundImage: {
        'main-body-gradient':
          'radial-gradient(circle at 50% 50%, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'paper-body-gradient':
          'radial-gradient(circle at 50% 50%, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'scissors-body-gradient':
          'radial-gradient(circle at 50% 50%, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'rock-body-gradient':
          'radial-gradient(circle at 50% 50%, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'spock-body-gradient':
          'radial-gradient(circle at 50% 50%, hsl(189, 59%, 53%), hsl(189, 59%, 53%))',
        'lizard-body-gradient':
          'radial-gradient(circle at 50% 50%, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
      },
    },
  },
  daisyui: {
    themes: ['synthwave'],
  },
  plugins: [daisyui],
};
