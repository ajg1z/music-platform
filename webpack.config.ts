import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildOptions, BuildPaths } from './config/build/types/config';
import webpack from 'webpack';
import path from 'path';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    const buildOptions: BuildOptions = {
        paths,
        isDev,
        mode,
        port: PORT,
        apiUrl,
        environment: 'frontend',
    };

    const config: webpack.Configuration = buildWebpackConfig(buildOptions);

    return config;
};
