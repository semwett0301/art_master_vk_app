import React from 'react';
import cl from './TextInput.module.css'
import InputHeader from "../modules/InputHeader/InputHeader";
import {classJoiner} from "../../../utils/classJoiner";
import {useMemo} from 'react';
import ReactInputMask from 'react-input-mask';

const formatChars = {
    '9': '[0-9]',
    'a': '[A-Za-z]',
    '*': '[A-Za-z0-9]'
}

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
                       className,
                       mask
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
            {
                mask ? <ReactInputMask formatChars={formatChars} placeholder={placeholder} mask={mask} value={value} onInput={e => onInput(e.target.value)}>
                    {(inputProps) => <input
                        className={classJoiner(cl.textField, wrapperClass)}
                        {...inputProps}
                        type={'text'} />}
                </ReactInputMask> : <input
                    className={classJoiner(cl.textField, wrapperClass)}
                    placeholder={placeholder} type={'text'} value={value} onInput={e => onInput(e.target.value)}/>
            }
        </div>
    );
}
;

export default TextInput;
