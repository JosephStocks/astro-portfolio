/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // Adds a new breakpoint in addition to the default breakpoints
            screens: {
                container: '1100px'
            }
        },
        fontFamily: {
            display: ['"Fredericka the Great"', 'serif'],
            inter: ['Inter', 'sans-serif'],
            'inter-tight': ['"Inter Tight"', 'sans-serif'],
            outfit: ['"Outfit"', 'fantasy']
        }
    },
    plugins: []
}
