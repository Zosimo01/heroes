import React from 'react'
import { heroes } from '../data/heroes'
import { Of_inicio } from './Of_inicio'

export const inicio = () => {

    const a=heroes
    console.log(a)
    return (
        <div>
            <hr/>
            <div className='heroes' >

            {
                a.map(a=>(
                    
                    <Of_inicio key={a.id} {...a} />
                    ))
                }
            </div>
        </div>
    )
}
