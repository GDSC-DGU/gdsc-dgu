import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
            },
            animation: {
                fadeIn: "fadeIn 1s forwards",
            },
            spacing: {
                '4.75': '19px' // 19px를 나타내는 키를 추가합니다.
              },
              width: {
                '70rem': '70rem', // '70rem'이라는 key로 70rem 너비를 설정
              },
        },
    },
    plugins: [],
};

export default config;
