// import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router';

// const Dashboard = lazy(() => import ('@components/Dashboard'));

const Router = () => {
    return <BrowserRouter>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Routes>
                <Route index element={<div>Dashboard</div>}>
                
                </Route>
            </Routes>
        {/* </Suspense> */}
    </BrowserRouter>
}

export default Router;