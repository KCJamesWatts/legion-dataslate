import { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router';

const AppContainer = lazy(() => import ('@components/AppContainer'));

const Router = () => {
    return <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index element={<AppContainer />}>
                
                </Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
}

export default Router;