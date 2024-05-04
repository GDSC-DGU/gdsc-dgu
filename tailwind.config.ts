import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '961px',
        tablet: '521px',
        bigTablet: '960px',
        mainDesktop: '1200px',
        xxl: { min: '1920px' },
        xl: { min: '1200px', max: '1919px' },
        lg: { min: '960px', max: '1199px' },
        md: { min: '768px', max: '959px' },
        sm: { max: '767px' },
      },
      colors: {
        mono_50: '#F7F8FA',
        mono_100: '#EAEBED',
        mono_200: '#CACDD2',
        mono_300: '#91A3AE',
        mono_400: '#9FA4A8',
        mono_500: '#73787E',
        mono_600: '#474C52',
        mono_700: '#3E4348',
        mono_800: '#27282C',
        mono_900: '#1C1D1F',
        mono_black: '#000000',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
      },
      spacing: {
        '4.75': '19px', // 19px를 나타내는 키를 추가합니다.
      },
      width: {
        '70rem': '70rem', // '70rem'이라는 key로 70rem 너비를 설정
        '5/8': '62.5%',
        '100/125': '80%',
      },
    },
  },
  plugins: [],
};

export default config;
