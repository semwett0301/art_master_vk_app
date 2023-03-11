import React from 'react';
import InputHeader from "../modules/InputHeader/InputHeader";
import cl from './Radio.module.css'

const Radio = ({required, label, content, selected, setSelected, className}) => {
    return (
        <div className={className}>
            <InputHeader required={required} label={label} className={cl.header}/>
            <div className={cl.wrapper}>
                {
                    content.map(text => <div key={text} className={cl.labelWrapper}>
                        <div className={cl.label} onClick={() => {
                            selected !== text && setSelected(text)
                        }}>
                            {selected === text ? <div className={cl.labelActive}/> : ''}
                        </div>
                        <div className={cl.text}>{text}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Radio;
