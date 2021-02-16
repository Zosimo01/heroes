import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Dc_comic } from './dc_comic'
import { inicio } from './inicio'
import { Marvel_comic } from './marvel_comic'
import { Nav_list } from './nav_list'
import { Of_of_cd } from './Of_of_cd'
import { Search } from './Search'

export const main = () => {



    return (
        <div>

            <Nav_list/>
            <Switch>
                <Route exact path='/' component={ inicio } />
                <Route path='/comics/:publisher' component={ Dc_comic } />
                <Route path='/marvel/:publisher' component={ Marvel_comic } />
                <Route path='/:id/:name' component={ Of_of_cd } />
                <Route path='/search' component={ Search } />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}
