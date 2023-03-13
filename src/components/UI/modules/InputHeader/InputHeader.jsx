import React, {useMemo} from 'react';
import cl from "./InputHeader.module.css";
import {classJoiner} from "../../../../utils/classJoiner";

const InputHeader = ({label, description, required, errorMessage, emptyMessage, completeMessage, className}) => {

    const messageClass = useMemo(() => {
        if (errorMessage) {
            return cl.nameError
        } else {
            if (emptyMessage) {
                return cl.nameEmpty
            } else {
                if (completeMessage) {
                    return cl.nameComplete
                } else {
                    return ''
                }
            }
        }
    }, [errorMessage, emptyMessage])

    return (
        <div className={classJoiner(cl.nameWrapper, className)}>
            <div
                className={classJoiner(cl.name, messageClass)}><span
                className={cl.required}>{required && !errorMessage && !emptyMessage && !completeMessage ? '*' : ''}</span>{errorMessage ? errorMessage : emptyMessage ? emptyMessage : completeMessage ? completeMessage : label}
            </div>
            <div className={cl.description}>{description}</div>
        </div>
    );
};

export default InputHeader;
