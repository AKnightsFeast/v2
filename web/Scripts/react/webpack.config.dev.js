var path = require('path');
var webpack = require('webpack');
//var HtmlWebPackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//var SRC_DIR = path.resolve(__dirname);
var CALENDAR_SRC_DIR = path.resolve(__dirname, 'monthlymenu');

//var BUILD_DIR = path.join(__dirname, 'wwwroot');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var EXCLUDE = /node_modules|bower_components/;

//const HOST = 'localhost';
//const PORT = process.env.PORT || 3000;


var calendarConfig = {
    entry: {
        calendar: [path.resolve(CALENDAR_SRC_DIR, 'calendar.jsx')]
    },
    output: {
        publicPath: '',
        path: BUILD_DIR,
        filename: '[name].js',
        libraryTarget: 'this'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: EXCLUDE,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader",
                    publicPath: BUILD_DIR
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            //Services: path.resolve(SRC_DIR, "services"),
            Assets: path.resolve(CALENDAR_SRC_DIR, "assets"),

            Utils: path.resolve(CALENDAR_SRC_DIR, 'utils'),
            //Services: path.resolve(SRC_DIR, 'services'),
            Components: path.resolve(CALENDAR_SRC_DIR, 'components'),

            Constants: path.resolve(CALENDAR_SRC_DIR, 'constants'),
            //ActionTypes: path.resolve(CALENDAR_SRC_DIR, 'constants', 'actiontypes'),

            Epics: path.resolve(CALENDAR_SRC_DIR, 'redux', 'epics'),
            Stores: path.resolve(CALENDAR_SRC_DIR, 'redux', 'stores'),
            //Actions: path.resolve(CALENDAR_SRC_DIR, 'redux', 'actions'),
            Reducers: path.resolve(CALENDAR_SRC_DIR, 'redux', 'reducers')//,

            //Pages: path.resolve(CALENDAR_SRC_DIR, 'components', 'pages'),
            //Layouts: path.resolve(CALENDAR_SRC_DIR, 'components', 'layouts'),
            //Controls: path.resolve(CALENDAR_SRC_DIR, 'components', 'controls')
        }
    }
}
/*
var assessmentsConfig = {

}

var config = {
    entry: {
        client: [path.resolve(SRC_DIR, 'client.js')]
    },
    output: {
        path: BUILD_DIR,
        publicPath: '',
        filename: '[name].js',
        libraryTarget: 'this'
    },
    plugins: [
        new webpack.DefinePlugin({
            WORKFLOW_APP_TITLE: 'Workflow',
            WORKFLOW_SERVER_HOST_URL: JSON.stringify('http://localhost:8030/')
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebPackPlugin({
            title: 'DEV Workflow',
            filename: path.resolve(BUILD_DIR, 'index.html'),
            template: path.resolve(SRC_DIR, 'templates', 'index.ejs')
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: BUILD_DIR,
        port: `${PORT}`
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: EXCLUDE,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader",
                    publicPath: SRC_DIR
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Services: path.resolve(SRC_DIR, "services"),
            Assets: path.resolve(__dirname, "assets"),

            Utils: path.resolve(SRC_DIR, 'utils'),
            Services: path.resolve(SRC_DIR, 'services'),
            Components: path.resolve(SRC_DIR, 'components'),

            Constants: path.resolve(SRC_DIR, 'constants'),
            ActionTypes: path.resolve(SRC_DIR, 'constants', 'actiontypes'),

            Epics: path.resolve(SRC_DIR, 'redux', 'epics'),
            Stores: path.resolve(SRC_DIR, 'redux', 'stores'),
            Actions: path.resolve(SRC_DIR, 'redux', 'actions'),
            Reducers: path.resolve(SRC_DIR, 'redux', 'reducers'),

            Pages: path.resolve(SRC_DIR, 'components', 'pages'),
            Layouts: path.resolve(SRC_DIR, 'components', 'layouts'),
            Controls: path.resolve(SRC_DIR, 'components', 'controls')
        }
    }
};
*/
module.exports = [ calendarConfig/*, assessmentsConfig*/ ];