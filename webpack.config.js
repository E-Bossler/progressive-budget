const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: './public/index.js',

    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },

    plugins: [
        new WebpackPwaManifest(
            {
                name: 'Budget Boss',
                short_name: 'Budget Boss',
                description: 'a progressive web application',
                background_color: 'white',
                theme_color: 'gray',
                start_url: '/',
                icons: [
                    {
                        src: path.resolve(
                            __dirname,
                            'public/icons/icon-512x512.png'
                        ),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: path.join("assets", "icons")
                    }
                ]
            }
        )
    ]
};

module.exports = config;