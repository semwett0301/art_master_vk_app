import React from 'react';
import cl from './Checkbox.module.css'
import checkedImg from './img/check.svg'
import {classJoiner} from "../../../utils/classJoiner";

const Checkbox = ({content, isError, checked, setChecked}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.checkboxWrapper}>
                <div
                    className={classJoiner(cl.labelInput, isError ? cl.labelInputError : checked ? cl.labelInputChecked : '')}
                    onClick={() => setChecked(!checked)}>
                    {checked ? <img src={checkedImg} alt={'Checked'}/> : <></>}
                </div>
            </div>
            <div className={cl.content}>
                {
                    content.map(element => {
                        if (element.type === 'text') {
                            return <span key={element.id}>{element.text}</span>
                        } else if (element.type === 'link') {
                            return <a href={element.link} key={element.id}><span
                                className={cl.linkContent}>{element.text}</span></a>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Checkbox;
