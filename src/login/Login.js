import React from 'react'
import { useHistory } from 'react-router-dom'

export const Login = () => {

   const history =useHistory()
    
    return (
        <div>
            <h2> Login </h2>
            <div className='login' >
                <form className='txt' >
                    <input/>
                    <input/>
                    <input/>
                </form>
                <div className='enter' >
                    <h3 onClick={()=>history.replace('/inicio')} > ENTER </h3>
                </div>
            </div>
        </div>
    )
}
