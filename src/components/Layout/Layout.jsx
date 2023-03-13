import React from 'react';
import Header from "../Header/Header";
import cl from './Layout.module.css'
import Button from "../UI/Button/Button";
import {classJoiner} from "../../utils/classJoiner";

const Layout = ({firstColumn, secondColumn, buttonPlaceholder, buttonDisabled, headerText, submitFunction}) => {
    return (
        <form noValidate onSubmit={submitFunction}>
            <div className={cl.wrapper}>
                <Header text={headerText} className={cl.header}/>
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
                <Button className={cl.button} placeholder={buttonPlaceholder} disabled={buttonDisabled} />
            </div>
        </form>
    );
};

export default Layout;
