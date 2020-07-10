import React from 'react'
import * as Colors from '../config/Color.config'
export const ESIcon = (props) => {
    const { size,
        Icon } = props
    const defaultStyle = {
        borderRadius: '40px',
        paddingTop:6

    }
    return (
        <div className='float-left mr-2 text-center text-light pdfBg' style={{ ...defaultStyle, background: Colors.PrimaryColor, width: size, height: size,fontSize:18 }}>
            {Icon}
        </div>
    )
}