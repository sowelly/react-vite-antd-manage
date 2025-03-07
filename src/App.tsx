import * as React from "react";
import {createHashRouter, RouterProvider} from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/Question/list';
import QuestionModifyPage from './pages/Question/modify';
import VideoPage from './pages/Video/list';
import VideoModifyPage from './pages/Video/modify';
import NotFound from "./pages/404/index";
import {ThemeProvider} from './theme/ThemeContext';

const routes = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        element: <BasicLayout/>,
        children: [
            {
                path: '/question',
                element: <QuestionPage/>,
            },
            {
                path: '/questionModify',
                element: <QuestionModifyPage/>,
            },
            {
                path: '/video',
                element: <VideoPage/>,
            },
            {
                path: '/videoModify',
                element: <VideoModifyPage/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
        ],
    },
]

const router = createHashRouter(routes);

export default function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}