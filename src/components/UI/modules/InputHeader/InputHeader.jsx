import React from 'react';
import cl from "./InputHeader.module.css";
import {classJoiner} from "../../../../utils/classJoiner";

const InputHeader = ({label, description, required, errorMessage, emptyMessage, completeMessage, className}) => {
    return (
        <div className={classJoiner(cl.nameWrapper, className)}>
            <div
                className={classJoiner(cl.name, errorMessage ? cl.nameError : emptyMessage ? cl.nameEmpty ? completeMessage : cl.nameComplete : '')}><span
                className={cl.required}>{required && !errorMessage && !emptyMessage && !completeMessage ? '*' : ''}</span>{errorMessage ? errorMessage : emptyMessage ? emptyMessage : completeMessage ? completeMessage : label}
            </div>
            <div className={cl.description}>{description}</div>
        </div>
    );
};

export default InputHeader;
