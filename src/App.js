import React, {useEffect} from 'react';
import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainPage from "./pages/MainPage/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EndPage from "./pages/EndPage/EndPage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import {Provider, useDispatch} from "react-redux";
import { store } from './store/index'
import bridge from "@vkontakte/vk-bridge";
import {setUserIdActionCreator} from "./store/reducers/userId/userIdActionCreators";

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

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     async function fetchData () {
    //         const userId = await bridge.send('VKWebAppGetUserInfo').then(r => r.id)
    //         dispatch(setUserIdActionCreator(userId))
    //     }
    //
    //     fetchData().catch(e => console.log(e))
    // }, [])

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
