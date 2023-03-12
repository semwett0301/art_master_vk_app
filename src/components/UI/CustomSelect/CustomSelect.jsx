import React, {useState} from 'react';
import InputHeader from "../modules/InputHeader/InputHeader";
import cl from './CustomSelect.module.css'
import {classJoiner} from "../../../utils/classJoiner";
import down from './img/down.svg'


const CustomSelect = ({
                          label,
                          required,
                          placeholder,
                          emptyMessage,
                          completeMessage,
                          className,
                          options,
                          selectedOption,
                          setSelectedOption
                      }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classJoiner(className, cl.wrapper)}>
            <InputHeader label={label} required={required} emptyMessage={emptyMessage}
                         completeMessage={completeMessage}/>
            <div
                className={classJoiner(cl.textFieldWrapper, cl.textColor, !selectedOption && cl.textFieldPlaceholder, isOpen && cl.openItems)}>
                <div className={cl.textField} onClick={() => setIsOpen(!isOpen)}>
                    <span>{selectedOption ? selectedOption.label : placeholder}</span>
                    <img src={down} alt={'Вниз'} className={cl.downPicture}/>
                </div>
                {
                    isOpen && <div className={cl.itemsWrapper}>
                        {options && options.map(elem => <div className={cl.item} onClick={() => {
                            setIsOpen(false)
                            setSelectedOption && setSelectedOption(elem)
                        }}>
                            <span className={classJoiner(cl.itemText, cl.textColor)}>{elem.label}</span>
                        </div>)}
                    </div>
                }
            </div>
        </div>
    );
};

export default CustomSelect;
