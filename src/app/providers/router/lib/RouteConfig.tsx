import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/routeConfig';

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePaths[AppRoutes.MAIN],
    },
    albums: {},
    artists: {},
    collections: {},
    genres: {},
    myMusic: {},
    notFound: {},
    radio: {},
    tracks: {},
};
