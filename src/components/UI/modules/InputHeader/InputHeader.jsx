import React, {useMemo} from 'react';
import cl from "./InputHeader.module.css";
import {classJoiner} from "../../../../utils/classJoiner";

const InputHeader = ({
                         label,
                         description,
                         required,
                         errorMessage,
                         isError,
                         isEmpty,
                         emptyMessage,
                         isComplete,
                         completeMessage,
                         className
                     }) => {

    const messageClass = useMemo(() => {
        if (errorMessage || isError) {
            return cl.nameError
        } else {
            if (emptyMessage || isEmpty) {
                return cl.nameEmpty
            } else {
                if (completeMessage || isComplete) {
                    return cl.nameComplete
                } else {
                    return ''
                }
            }
        }
    }, [errorMessage, emptyMessage, isEmpty, isError, isComplete])

    return (
        <div className={classJoiner(cl.nameWrapper, className)}>
            <div
                className={classJoiner(cl.name, messageClass)}><span
                className={cl.required}>{required ? '*' : ''}</span>{errorMessage ? errorMessage : emptyMessage ? emptyMessage : completeMessage ? completeMessage : label}
            </div>
            <div className={cl.description}>{description}</div>
        </div>
    );
};

export default InputHeader;
