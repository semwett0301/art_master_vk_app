import React, {useEffect, useState} from 'react';
import cl from './MainPage.module.css'
import logo from './img/main-logo.svg'
import {classJoiner} from "../../utils/classJoiner";
import {useLocation, useNavigate} from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={cl.wrapper}>
            <div>
                <img src={logo} className={cl.logo}/>
            </div>
            <span className={cl.description}>Масштабные профессиональные соревнования для специалистов в сфере backstage и цифрового искусства,
                    которые реализуют самые крупные креативные проекты под руководством ведущих экспертов.
                </span>
            <span className={cl.submit}>Подача заявок принимается 14 марта - 28 мая</span>
            <div className={cl.buttonWrapper}>
                <a href={'https://vk.com/artmasters'}>
                    <button className={classJoiner(cl.buttonMore, cl.button)}>Перейти в сообщество
                    </button>
                </a>
                <button className={classJoiner(cl.buttonContinue, cl.button)} onClick={() => {
                    navigate('/application', {
                        location: location
                    })
                }}>Подать заявку
                </button>
            </div>
        </div>
    );
};

export default MainPage;
