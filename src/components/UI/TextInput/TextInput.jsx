import React from 'react';
import cl from './TextInput.module.css'
import InputHeader from "../modules/InputHeader/InputHeader";
import {classJoiner} from "../../../utils/classJoiner";
import {useMemo} from 'react';


const TextInput = ({
                       label,
                       description,
                       placeholder,
                       required,
                       errorMessage,
                       isError,
                       isEmpty,
                       emptyMessage,
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
                         errorMessage={errorMessage} completeMessage={completeMessage} isEmpty={isEmpty}
                         isError={isError} isComplete={isComplete}/>
            <input
                className={classJoiner(cl.textField, wrapperClass)}
                placeholder={placeholder} type={'text'} value={value} onInput={e => onInput(e.target.value)}/>
        </div>
    );
};

export default TextInput;
