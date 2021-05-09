
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require("babel-plugin-transform-typescript-metadata").default,
        ],
        [
            require("@babel/plugin-proposal-decorators").default,
            {
                legacy: true
            }
        ],
        [
            'module-resolver',
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.android.js',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.tsx',
                ],
                'root': ['./'],
                'alias': {
                    app: './src',
                },
            }
        ],
    ],
};
