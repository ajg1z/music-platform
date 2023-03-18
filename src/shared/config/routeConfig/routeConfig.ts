export enum AppRoutes {
    MAIN = 'main',
    GENRES = 'genres',
    NOT_FOUND = 'notFound',
    ARTISTS = 'artists',
    ALBUMS = 'albums',
    RADIO = 'radio',
    COLLECTIONS = 'collections',
    MY_MUSIC = 'myMusic',
    TRACKS = 'tracks',
}

export const RoutePaths: Record<AppRoutes, string> = {
    genres: '/genres',
    main: '/',
    notFound: '*',
    artists: '/artists',
    albums: '/albums',
    collections: '/collections',
    myMusic: '/myMusic',
    radio: '/radio',
    tracks: '/tracks',
};
