import React from 'react'
import { NavLink } from 'react-router-dom'

export const Of_inicio = ({
        id,
        superhero,
        publisher,
}) => {
 

    return (
        <div className='superheroe'  >
            <h3> {superhero} </h3>
            <img  src={`/heroes/${id}.jpg`} style={{width:`100px`,float:'left'}} />
           <div className='mas' >
             <div> publisher:<p> {publisher} </p>  </div>  
             <p> <NavLink exact to={`/${id}/${publisher}`} activeStyle={{color:'red',cursor: 'pointer'}} > Mas... </NavLink>  </p>

            </div>
        </div>

    )
}
