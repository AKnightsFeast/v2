const isDev = !(/production/i).test(process.env.NODE_ENV);
const isProd = (/production/i).test(process.env.NODE_ENV);

getPlugins = () => {
    const result = [
        require('postcss-import'),
        require('tailwindcss'),
        require("postcss-nesting"),
        require('autoprefixer'),
        require('postcss-assets')({
            basePath: 'src',
            loadPaths: ['assets/img']
        }),
        require("cssnano"),
    ];

    if (isDev) {
        result.push.apply(result, [
            require('postcss-reporter')(),
            require('postcss-browser-reporter')(),
        ]);
    }

    return result;
}

module.exports = {
    plugins: getPlugins()
}