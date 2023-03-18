export const getFontSize = (fs: string) => {
    if (!fs) return 0;
    return Number.parseInt(fs, 10);
};
