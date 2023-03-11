export const buildCssLoader = () => ({
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader'],
});
