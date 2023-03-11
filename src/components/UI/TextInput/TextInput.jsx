import React from 'react';
import cl from './TextInput.module.css'
import InputHeader from "../modules/InputHeader/InputHeader";
import {classJoiner} from "../../../utils/classJoiner";


const TextInput = ({label, description, placeholder, required, errorMessage, emptyMessage, className}) => {
    return (
        <div className={classJoiner(cl.wrapper, className)}>
            <InputHeader required={required} label={label} description={description} emptyMessage={emptyMessage} errorMessage={errorMessage} />
            <input
                className={classJoiner(cl.textField, errorMessage ? cl.textFieldError : emptyMessage ? cl.textFieldError : '')}
                placeholder={placeholder} type={'text'}/>
        </div>
    );
};

export default TextInput;
