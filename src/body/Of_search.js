import React from 'react'

export const Of_search = ({ id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters}) => {
    return (
        <div>
            <img src={`/heroes/${id}.jpg`} style={{width:'200px',float:'left',margin:'10px 10px'}} />
            <div style={{float:'left',margin:'10px 10px'}} >
                <div>
                 { superhero } <hr/>
                {publisher} <hr/>
                {alter_ego} <hr/>
                {first_appearance} <hr/>
                {characters} <hr/>
                </div>
                 </div>
        </div>
    )
}
