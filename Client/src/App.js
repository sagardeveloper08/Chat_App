import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Join from './components/Join/Join'
import './app.css'
// components imported


const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Join} />
                </Switch>
            </Router>
        </>
    )
}

export default App