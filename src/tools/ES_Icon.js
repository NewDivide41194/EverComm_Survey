import React from 'react'
import * as Colors from '../config/Color.config'
export const ESIcon = (props) => {
    const { size,
        Icon } = props
    const defaultStyle = {
        borderRadius: '40px',
    }
    return (
        <div className='float-left mr-2 text-center text-light' style={{ ...defaultStyle, background: Colors.PrimaryColor, width: size, height: size }}>
            {Icon}
        </div>
    )
}