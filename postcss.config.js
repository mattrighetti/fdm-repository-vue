const { plugins } = require("./tailwind.config");

module.exports = {
    plugins: [
        require('tailwindcss')('tailwind.js'),
        require('autoprefixer')()
    ]
}