import React from 'react';
import * as Color from '../config/Color.config';

export const ESTextfield =props=>{
    const {
        style,
        className,
        placeHolder,
        required,
        type,
        id,
<<<<<<< HEAD
        width,
        onChange,
        value,
        maxHeight
      } = props;
    
    
      const defaultStyle = {
        width: width === undefined ? "100%" : width,
        padding: 20,
        fontSize: 14,
        maxHeight: "150px",
        boxShadow: "none",
        shapeOutline: "none",
        outline: "none",
        border: `1px solid gray`,
        // background: `${Color.SecondaryColor}`,
        borderRadius: 5
      };
      const userStyle = style === undefined ? {} : style;
    
      const _handleFocus = () => {
        document.getElementById(
          id
        ).style.border = `1px solid ${Color.PrimaryColor}`;
      };
      const _handleBlur = () => {
        document.getElementById(id).style.border = `1px solid gray`;
      };
    
      return (
        <textarea 
=======
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
>>>>>>> 56db5c56efd9dbecb7aec7c024896ccbe2afb33f
        id={id}
        required={required}
        onChange={onChange}
        style={{
<<<<<<< HEAD
            ...defaultStyle,
                ...userStyle
            }}
            placeholder={placeHolder}
            className={`form-control form-rounded ${className}`}
            onFocus={_handleFocus}
            onBlur={_handleBlur}
            type={type === undefined ? "text" : `${type}`}
            value={value}
            maxHeight={maxHeight}
        >
        </textarea>
      );
    };
    
=======

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
>>>>>>> 56db5c56efd9dbecb7aec7c024896ccbe2afb33f



