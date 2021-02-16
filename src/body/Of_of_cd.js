import React from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import { get_listas } from './listas_heroes/get_listas'

export const Of_of_cd = () => {
   const are= useHistory()
    
   const que = useParams()
 const {dc} = get_listas(que.id)

 console.log(dc)
 console.log(que)
    return (
        <div className='hereo_onli' >
            <img src={`/heroes/${dc.id}.jpg`} style={{width:'300px',float:'left'}} />
             
            <p onClick={()=>are.goBack()} style={{color:'red',cursor: 'pointer'}}> {'<<<'}  atras </p>
            <div  className='cdOnli' >
             <p>
                <span className='datos'  >superheroe:</span> {dc.superhero}
            </p> 
             <p><span className='datos'> publisher:</span> {dc.publisher} </p>  
             <p><span className='datos'> alter_ego:</span> {dc.alter_ego} </p>  
             <p><span className='datos'> first_appearance:</span> {dc.first_appearance} </p>  
             <p><span className='datos'> characters:</span> {dc.characters} </p>  

            </div>
        </div>
    )
}
