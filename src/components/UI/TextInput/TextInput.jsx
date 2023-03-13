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
                       emptyMessage,
                       completeMessage,
                       value,
                       onInput,
                       className
                   }) => {

    const wrapperClass = useMemo(() => {
        if (errorMessage) {
            return cl.textFieldError
        } else {
            if (emptyMessage) {
                return cl.textFieldEmpty
            } else {
                if (completeMessage) {
                    return cl.textFieldComplete
                } else {
                    return ''
                }
            }
        }
    }, [errorMessage, emptyMessage])

    return (
        <div className={classJoiner(cl.wrapper, className)}>
            <InputHeader required={required} label={label} description={description} emptyMessage={emptyMessage}
                         errorMessage={errorMessage} completeMessage={completeMessage}/>
            <input
                className={classJoiner(cl.textField, wrapperClass)}
                placeholder={placeholder} type={'text'} value={value} onInput={e => onInput(e.target.value)}/>
        </div>
    );
};

export default TextInput;
