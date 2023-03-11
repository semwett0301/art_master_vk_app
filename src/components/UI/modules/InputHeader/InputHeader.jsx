import React from 'react';
import cl from "./InputHeader.module.css";
import {classJoiner} from "../../../../utils/classJoiner";

const InputHeader = ({label, description, required, errorMessage, emptyMessage}) => {
    return (
        <div className={cl.nameWrapper}>
            <div
                className={classJoiner(cl.name, errorMessage ? cl.nameError : emptyMessage ? cl.nameEmpty : '')}><span
                className={cl.required}>{required && !errorMessage && !emptyMessage ? '*' : ''}</span>{errorMessage ? errorMessage : emptyMessage ? emptyMessage : label}
            </div>
            <div className={cl.description}>{description}</div>
        </div>
    );
};

export default InputHeader;
