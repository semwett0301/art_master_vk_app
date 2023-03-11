import React from 'react';
import Header from "../Header/Header";
import cl from './Layout.module.css'
import Button from "../UI/Button/Button";

const Layout = ({firstColumn, secondColumn, buttonPlaceholder}) => {
    return (
        <div className={cl.wrapper}>
            <Header text={'Заявка'} className={cl.header}/>
            <div className={cl.content}>
                <div className={cl.contentBlock}>
                    {
                        firstColumn.map(elem => elem)
                    }
                </div>
                <div className={cl.contentBlock}>
                    {
                        secondColumn.map(elem => elem)
                    }
                </div>
            </div>
            <Button className={cl.button} placeholder={buttonPlaceholder}/>
        </div>
    );
};

export default Layout;
