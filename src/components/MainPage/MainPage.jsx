import React from 'react';
import cl from './MainPage.module.css'
import logo from './img/main-logo.svg'
import {classJoiner} from "../../utils/classJoiner";

const MainPage = () => {
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
                <button className={classJoiner(cl.buttonMore, cl.button)}>Подробнее</button>
                <button className={classJoiner(cl.buttonContinue, cl.button)}>Подать заявку</button>
            </div>
        </div>
    );
};

export default MainPage;
