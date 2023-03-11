import React from 'react';
import Header from "../Header/Header";
import cl from './Layout.module.css'
import Button from "../UI/Button/Button";
import {classJoiner} from "../../utils/classJoiner";

const Layout = ({firstColumn, secondColumn, buttonPlaceholder}) => {
    return (
        <div className={cl.wrapper}>
            <Header text={'Заявка'} className={cl.header}/>
            <div className={classJoiner(cl.content, !(firstColumn && secondColumn) ? cl.singleColumnContent : '')}>
                <div className={classJoiner(cl.contentBlock, !(firstColumn && secondColumn) ? cl.singleColumnContentBlock : '')}>
                    {
                        firstColumn && firstColumn.map(elem => elem)
                    }
                </div>
                <div className={classJoiner(cl.contentBlock, !(firstColumn && secondColumn) ? cl.singleColumnContentBlock : '')}>
                    {
                        secondColumn && secondColumn.map(elem => elem)
                    }
                </div>
            </div>
            <Button className={cl.button} placeholder={buttonPlaceholder}/>
        </div>
    );
};

export default Layout;
