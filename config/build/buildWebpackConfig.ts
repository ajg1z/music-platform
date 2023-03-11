import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types/config';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { paths, isDev, mode } = options;

    return {
        entry: paths.entry,
        mode,
        output: {
            filename: '[name].[fullhash].js',
            path: paths.build,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
