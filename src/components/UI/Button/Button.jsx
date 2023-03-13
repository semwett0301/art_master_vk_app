import React from 'react';
import cl from './Button.module.css'
import {classJoiner} from "../../../utils/classJoiner";

const Button = ({placeholder, disabled, onClick, className}) => {
    return (
        <div className={classJoiner(cl.wrapper, className, disabled ? cl.disabled : '')} onClick={() => {
            !disabled && onClick && onClick()
        }}>
            <button>
                <span>{placeholder}</span>
            </button>
        </div>
    );
};

export default Button;
