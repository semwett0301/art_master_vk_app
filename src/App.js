import React from 'react';
import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainPage from "./components/MainPage/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EndPage from "./components/EndPage/EndPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <EndPage/>
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
