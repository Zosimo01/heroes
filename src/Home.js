import React from 'react'
import  {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { main } from './body/main'
import { Login } from './login/Login'

export const Home = () => {
    return (
        <Router>

        <div>
            <h1> Home </h1>
            {/* <img src='/heroes/dc-arrow.jpg' /> */}
        <Switch>
            <Route path='/login' component={ Login } />
            <Route path='/' component={ main } />
        </Switch>

        </div>
        </Router>
    )
}
