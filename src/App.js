import React from 'react';
import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainPage from "./pages/MainPage/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EndPage from "./pages/EndPage/EndPage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/success',
        element: <EndPage/>
    },
    {
        path: '/application',
        element: <ApplicationPage/>
    }
])

const App = () => {
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <RouterProvider router={router}/>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
