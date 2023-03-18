import React from 'react';
import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainPage from "./pages/MainPage/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EndPage from "./pages/EndPage/EndPage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import {Provider} from "react-redux";
import { store } from './store/index'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/end',
        element: <EndPage/>
    },
    {
        path: '/application',
        element: <ApplicationPage/>
    },
    {
        path: '/portfolio',
        element: <PortfolioPage/>
    },
    {
        path: '/profile',
        element: <ProfilePage/>
    },
    {
        path: '*',
        element: <MainPage/>
    }
])

const App = () => {
    return (
        <ConfigProvider appearance="light">
            <AdaptivityProvider>
                <AppRoot>
                    <Provider store={store}>
                        <RouterProvider router={router}/>
                    </Provider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
