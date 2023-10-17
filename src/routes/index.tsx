import { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import { Loading, ErrorBoundary, Main } from '../components'
import { IRouteConfig, pageRoutes } from './routes'

const renderRoute = (routes: IRouteConfig[]) => {
    return routes.map((route) => {
        const {
            path,
            component: Component,
            disableHeader = false,
            isBack = false,
        } = route
        return (
            <Route
                path={path}
                key={path}
                element={
                    <Main disableHeader={disableHeader} isBack={isBack}>
                        <Component />
                    </Main>
                }
            />
        )
    })
}

const Routers = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <title>{'T Movies'}</title>
            </Helmet>
            <Suspense fallback={<Loading isLoading={true} />}>
                <ErrorBoundary>
                    <Routes>{renderRoute(pageRoutes)}</Routes>
                </ErrorBoundary>
            </Suspense>
        </>
    )
}

export * from './routes'
export default Routers
