import {createHashRouter,RouterProvider, Routes, Route} from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import NotFound from "./pages/404/index";

const router = createHashRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        element: <BasicLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },

            {
                path: 'form',
                element: <FormPage />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}