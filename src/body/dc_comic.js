import React from 'react'
import { useParams } from 'react-router-dom'
import { heroes_listas } from './listas_heroes/heroes_listas'
import { Of_dc_comics } from './Of_dc_comics'

export const Dc_comic = () => {
  
    
    const are= useParams()
    const {dc}=heroes_listas(are.publisher)

    return (
        <div className='cd_heroes' >
            {
                dc.map(a=>(
                    <Of_dc_comics key={ a.id } {...a} />
                ))
            }
        </div>
    )
}
