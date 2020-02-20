import React from 'react'
import Logo from '../../assets/images/Logo.jpg'

const NavBar =()=>{
    return(
        <div className='d-flex flex-row bg-light py-3 px-2'>
            <img src={Logo} style={{width:'150px'}} alt='logo'/>
        </div>
    )
}

export default NavBar