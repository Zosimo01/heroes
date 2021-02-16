import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

export const Nav_list = () => {
   const history= useHistory()
    return (
        <>
            <ul className='nave' >
                <li> <NavLink exact to='/' activeStyle={{color:'red'}} > INICIO </NavLink> </li>
                <li><NavLink exact to='/comics/DC Comics' activeStyle={{color:'red'}} > DC Comics </NavLink></li>
                <li><NavLink exact to='/marvel/Marvel Comics' activeStyle={{color:'red'}} > Marvel Comics </NavLink>  </li>
                <li><NavLink exact to='/search' activeStyle={{color:'red'}} > buscar un heroe </NavLink>  </li>

                <li onClick={()=>history.replace('/login')} > LOG OUT </li>
            </ul>
        </>
    )
}
