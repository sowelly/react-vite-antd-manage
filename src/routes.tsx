import { lazy } from 'react';
import * as React from "react";

const HomePage = lazy(() => import('@/pages/HomePage'));

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
];

export default routes;