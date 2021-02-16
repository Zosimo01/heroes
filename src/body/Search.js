import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import queryString from 'query-string';
import { get_by_name } from './listas_heroes/get_by_name';
import { Of_search } from './Of_search';

export const Search = () => {
    const [busq, setbusq] = useState([]);
    
  const history= useHistory();
    const {search:q}= useLocation()
    const {search:query=''}=queryString.parse(q)
    
    

    console.log(query)
  const {values:{search},handleInputChange,reset} = useForm({search:query})

useEffect(() => {

        const heroes =get_by_name(search)
        setbusq(heroes)
    
}, [search])

const prevet=(e)=>{
    e.preventDefault();
    history.push(`search?search=${ search}`);
    get_by_name(query)
}
    return (
        <div className='padre_search' >
            <div className='texto' >
                
                <h2> buscar... </h2>
                <div className='login' >
                    <form onSubmit={prevet} className='txt' >
                        <input 
                        type='search'
                        onChange={handleInputChange}
                        name='search'
                        value={search}
                        autoComplete='off'
                        />
                    <div className='enter' >
                        <input type='submit' value=' buscar' style={{fontSize:'30px'}} />
                    </div>
                    </form>
                   
                </div>
                  
            </div>
            <div className='resultado'>
                RESULTADOS
               <div className='buquedas' >
                {
                    busq?.map(a=>(
                       <Of_search key={a.id} {...a} />

                    ))
                }
                </div> 
            </div>
        </div>
    )
}
