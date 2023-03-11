import React from 'react';
import logo from './img/logo.svg'
import cl from './Header.module.css'
import {classJoiner} from "../../utils/classJoiner";

const Header = ({ className, text }) => {
    return (
        <div className={classJoiner(cl.wrapper, className)}>
            <div className={cl.text}>{text}</div>
            <img src={logo} alt={'Логотип'}/>
        </div>
    );
};

export default Header;
