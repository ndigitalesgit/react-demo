import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css'

import LoginPage from './Pages/Login'
import HomePage from './Pages/Home'
import UsersPage from './Pages/Users'
import UsersEditPage from './Pages/UsersEdit'

function App() {
    return (
        <Router>
            <div className="App">
                <section>
                    <Route path="/login" component={LoginPage} />
                    
                    <Route path="/" exact component={HomePage} />
                    <Route path="/users" exact component={UsersPage} />
                    <Route path="/users/edit/:id" component={UsersEditPage} />
                </section>
            </div>
        </Router>
    );
}

export default App;
