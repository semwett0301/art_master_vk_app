import React, {useCallback, useEffect, useMemo, useState} from 'react';
import InputHeader from "../modules/InputHeader/InputHeader";
import cl from './FilePicker.module.css'
import {classJoiner} from "../../../utils/classJoiner";

const FilePicker = ({
                        id,
                        className,
                        required,
                        label,
                        buttonLabel,
                        description,
                        imgSrc,
                        instruction,
                        inputRef,
                        onInput
                    }) => {

    const [currentInstruction, setCurrentInstruction] = useState('')

    const resetInstruction = useCallback(() => {
        if (inputRef.current?.files.length > 0) {
            setCurrentInstruction('Загружено!')
        } else {
            setCurrentInstruction(instruction)
        }
    }, [])

    useEffect(() => {
        resetInstruction()
    }, [])

    return (
        <div className={className}>
            <InputHeader required={required} label={label} className={cl.header}/>
            <div className={cl.description}>
                {description}
            </div>
            <div className={cl.inputWrapper}>
                <div className={classJoiner(cl.inputWrapper, cl.inputBlockWrapper)}>
                    <input id={id} type={'file'} multiple className={cl.input} ref={inputRef} onInput={() => {
                        onInput && onInput()
                        resetInstruction()
                    }}/>
                    <label for={id} className={cl.inputLabel}>
                        {imgSrc && <img src={imgSrc} alt={'Иконка'} className={cl.logo}/>}
                        <span>{buttonLabel}</span>
                    </label>
                </div>
                <div className={cl.instruction}>
                    {currentInstruction}
                </div>
            </div>
        </div>
    );
};

export default FilePicker;
