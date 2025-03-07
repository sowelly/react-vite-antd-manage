import * as React from "react";
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-600 mt-2">Oops! 页面未找到</p>
            <button
                onClick={() => navigate('/')}
                className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
                返回首页
            </button>
        </div>
    );
}