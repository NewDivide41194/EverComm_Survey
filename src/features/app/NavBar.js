import React from 'react'
import Logo from '../../assets/images/Logo.jpg'

const NavBar =()=>{
    return(
        <div className='d-flex flex-row py-3 px-4 sticky-top bg-light'>
            <img src={Logo} style={{width:'150px',height:'100%'}} alt='logo'/>
        </div>
    )
}

export default NavBar