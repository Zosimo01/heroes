import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { get_listas } from './listas_heroes/get_listas'

export const Of_dc_comics = ({  id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters}) => {

    return (
        <div className='superheroe'  >
           
            
            <img src={`/heroes/${id}.jpg`} style={{width:'100px',float:'left'}} />

            <div className='mas' >
             <div> publisher:<p> {publisher} </p>  </div>  
            <p> <NavLink exact to={`/${id}/${publisher}`} activeStyle={{color:'red',cursor: 'pointer'}} > Mas... </NavLink>  </p>
            </div>
        </div>
    )
}
