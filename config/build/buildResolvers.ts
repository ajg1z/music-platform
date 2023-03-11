import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions) => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    };
};
