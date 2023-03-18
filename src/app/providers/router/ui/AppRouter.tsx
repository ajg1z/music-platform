import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { RouteConfig } from '../lib/RouteConfig';

export const AppRouter = () => {
    const routeList = useMemo(
        () =>
            Object.values(RouteConfig).map((route) => (
                <Route
                    path={route.path}
                    key={route.path}
                    element={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <Suspense key={route.path} fallback={<PageLoader />}>
                            <div className='page-wrapper'>{route.element}</div>
                        </Suspense>
                    }
                />
            )),
        [],
    );

    return <Routes>{routeList}</Routes>;
};
