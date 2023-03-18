import React, {useMemo} from 'react';
import cl from './TextField.module.css'
import InputHeader from "../modules/InputHeader/InputHeader";
import {classJoiner} from "../../../utils/classJoiner";


const TextField = ({
                       label,
                       bottomDescription,
                       failBottomDescription,
                       description,
                       placeholder,
                       required,
                       errorMessage,
                       emptyMessage,
                       isError,
                       isEmpty,
                       isComplete,
                       completeMessage,
                       value,
                       onInput,
                       className
                   }) => {

    const wrapperClass = useMemo(() => {
        if (errorMessage || isError) {
            return cl.textFieldError
        } else {
            if (emptyMessage || isEmpty) {
                return cl.textFieldEmpty
            } else {
                if (completeMessage || isComplete) {
                    return cl.textFieldComplete
                } else {
                    return ''
                }
            }
        }
    }, [errorMessage, emptyMessage, isEmpty, isError, isComplete])

    return (
        <div className={classJoiner(cl.wrapper, className)}>
            <InputHeader required={required} label={label} description={description} emptyMessage={emptyMessage}
                         errorMessage={errorMessage} completeMessage={completeMessage} isError={isError}
                         isComplete={isComplete} isEmpty={isEmpty}/>
            <textarea
                className={classJoiner(cl.textField, wrapperClass)}
                placeholder={placeholder} value={value} onInput={e => onInput(e.target.value)}
            />
            <div
                className={classJoiner(cl.bottomDescription, failBottomDescription && cl.failBottomDescription)}>{Array.isArray(bottomDescription) ? bottomDescription.map(e => <div>{e}</div>) : bottomDescription}</div>
        </div>
    );
};

export default TextField;
