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
    ];
    
    if (isDev) {
        result.push.apply(result, [
            require('postcss-reporter')(),
            require('postcss-browser-reporter')(),
        ]);
    } else {
        result.push.apply(result, [
            require("cssnano"),
        ]);
    }

    return result;
}

module.exports = {
    plugins: getPlugins()
}