const path = require('path');

module.exports = {
    bail: true,
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
    },
    resolve: {
        modules: [
            'mock_modules',
            'node_modules',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/'),
                loader: 'babel-loader',
            }
        ]
    },
};
