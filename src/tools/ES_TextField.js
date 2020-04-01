import React from 'react';
import * as Color from '../config/Color.config';

export const ESTextfield=props=>{
    const {
        style,
        className,
        placeHolder,
        required,
        type,
        id,
        height,
        width,
        onChange,
        value,
        maxLength
    }=props;

    const defaultStyle={
        width: width ===undefined ? "100%"
    };

    const userStyle=style ===undefined ? {} :style;

    const_handleFocus =()=>{
        document.getElementById(
            id
        ).style.border= `1px solid $`
    }

    return(
        <input 
        autoComplete="off"
        spellCheck="false"
        id={id}
        required={required}
        onChange={onChange}
        style={{

        }}  
        placeholder={placeHolder}
        className={`form-control form-rounded ${className}`}
        onFocus={_handleFocus}
        onBlur={_handleBlur}
        type={type ===undefined ? "text" `${type}`}
        value={value}
        maxLength={maxLength}      
        />
    );
};



