import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProxyConfigArrayItem } from 'webpack-dev-server';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type Mode = 'development' | 'production';

interface Env {
    mode: Mode;
}

export const expressPort = 5038;
const appPort = 5039;

export default (env: Env) => {
    const isDev = env.mode === 'development';

    const setProxy: ProxyConfigArrayItem[] = [
        {
            context: ['/api'],
            target: `http://localhost:${expressPort}`,
            secure: false,
            changeOrigin: true,
        },
    ];

    const config: Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            clean: true,
            publicPath: '/',
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
            isDev ? new webpack.ProgressPlugin() : undefined,
            new MiniCssExtractPlugin(),
            isDev && new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin(),
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.module\.s[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /\.module\.s[ac]ss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                getCustomTransformers: () => ({
                                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                                }),
                                transpileOnly: isDev,
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            host: 'localhost',
            port: appPort,
            proxy: setProxy,
            hot: true,
        },
        optimization: {
            usedExports: true,
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },
    };
    return config;
};
