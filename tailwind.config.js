module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    async rewrites() {
        return [
            {
                source: '/js/script.js',
                destination: 'https://analytics.aaron-dev.nl/js/plausible.js'
            },
            {
                source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
                destination: 'https://analytics.aaron-dev.nl/api/event'
            }
        ];
    },
}
