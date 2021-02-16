import React from 'react'
import { useParams } from 'react-router-dom';
import { heroes_listas } from './listas_heroes/heroes_listas'
import { Of_dc_marvel } from './Of_dc_marvel';

export const Marvel_comic = () => {
    

    const are= useParams()
    const {dc}=heroes_listas(are.publisher)

    console.log(dc)

    return (
        <div className='heroes' >
            {
                dc.map(a=>{
                  return  <Of_dc_marvel key={a.id} {...a} />
               })
            }
        </div>
    )
}


