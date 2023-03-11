import React from 'react';
import InputHeader from "../modules/InputHeader/InputHeader";
import cl from './FilePicker.module.css'
import {classJoiner} from "../../../utils/classJoiner";

const FilePicker = ({id, className, required, label, buttonLabel, description, imgSrc, instruction, inputRef, onInput}) => {
    return (
        <div className={className}>
            <InputHeader required={required} label={label} className={cl.header}/>
            <div className={cl.description}>
                {description}
            </div>
            <div className={cl.inputWrapper}>
                <div className={classJoiner(cl.inputWrapper, cl.inputBlockWrapper)}>
                    <input id={id} type={'file'} className={cl.input} ref={inputRef} onInput={onInput}/>
                    <label for={id} className={cl.inputLabel}>
                        { imgSrc && <img src={imgSrc} alt={'Иконка'} className={cl.logo}/>}
                        <span>{buttonLabel}</span>
                    </label>
                </div>
                <div className={cl.instruction}>
                    {instruction}
                </div>
            </div>
        </div>
    );
};

export default FilePicker;
