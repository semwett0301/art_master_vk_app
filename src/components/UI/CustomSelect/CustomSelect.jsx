import React, {useState, useMemo} from 'react';
import InputHeader from "../modules/InputHeader/InputHeader";
import cl from './CustomSelect.module.css'
import {classJoiner} from "../../../utils/classJoiner";
import down from './img/down.svg'


const CustomSelect = ({
                          label,
                          required,
                          placeholder,
                          description,
                          failDescription,
                          emptyMessage,
                          isEmpty,
                          completeMessage,
                          isComplete,
                          className,
                          options,
                          selectedOption,
                          setSelectedOption,
                          onClick
                      }) => {
    const [isOpen, setIsOpen] = useState(false)

    const wrapperClass = useMemo(() => {
        if (emptyMessage || isEmpty) {
            return cl.textFieldEmpty
        } else {
            if (completeMessage || isComplete) {
                return cl.textFieldComplete
            } else {
                return ''
            }
        }
    }, [emptyMessage, isEmpty, isComplete])

    return (
        <div className={classJoiner(className, cl.wrapper)} onClick={onClick}>
            <InputHeader label={label} required={required} emptyMessage={emptyMessage}
                         completeMessage={completeMessage} isComplete={isComplete} isEmpty={isEmpty}/>
            <div
                className={classJoiner(cl.textFieldWrapper, cl.textColor, !selectedOption && cl.textFieldPlaceholder, isOpen && cl.openItems, wrapperClass)}>
                <div className={cl.textField} onClick={() => setIsOpen(!isOpen && options.length !== 0)}>
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
            <div className={classJoiner(cl.description, failDescription && cl.failDescription)}>{description}</div>
        </div>
    );
};

export default CustomSelect;
