import { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router';

const AppContainer = lazy(() => import ('@components/AppContainer'));

const DemoComponents = lazy(() => import ('@components/DemoComponents'));
const DemoPalette = lazy(() => import ('@components/DemoPalette'));

const Router = () => {
    return <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<AppContainer />}>
                    <Route path="/" element={<div>Root Dashboard</div>} />
                    <Route path="components" element={<DemoComponents />} />
                    <Route path="demo" element={<DemoPalette />} />
                </Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
}

export default Router;