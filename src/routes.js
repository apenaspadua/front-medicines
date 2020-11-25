import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Form from './pages/form'
import Response from './pages/response'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/form" component={Form}/>
                <Route path="/response" component={Response}/>
            </Switch>
        </BrowserRouter>
    )
}