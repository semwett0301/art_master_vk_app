import React from 'react';
import cl from './TextInput.module.css'
import InputHeader from "../modules/InputHeader/InputHeader";
import {classJoiner} from "../../../utils/classJoiner";


const TextInput = ({label, description, placeholder, required, errorMessage, emptyMessage, completeMessage, value, onInput, className}) => {
    return (
        <div className={classJoiner(cl.wrapper, className)}>
            <InputHeader required={required} label={label} description={description} emptyMessage={emptyMessage} errorMessage={errorMessage} completeMessage={completeMessage}/>
            <input
                className={classJoiner(cl.textField, errorMessage ? cl.textFieldError : emptyMessage ? cl.textFieldError ? completeMessage : cl.textFieldComplete : '')}
                placeholder={placeholder} type={'text'} value={value} onInput={e => onInput(e.target.value)}/>
        </div>
    );
};

export default TextInput;
