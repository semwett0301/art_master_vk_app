import React from 'react';
import cl from './EndPage.module.css'

const EndPage = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.mainContentWrapper}>
                <div>Спасибо!</div>
                <div>Ваша заявка <span className={cl.boldText}>принята!</span></div>
            </div>

            <div className={cl.linkTextWrapper}>
                <div className={cl.linkText}>Перейти в официальное сообщество</div>
            </div>
        </div>
    );
};

export default EndPage;
