
import React, { Component } from 'react'

import { Link } from "react-router-dom"

import { Navbar } from 'react-bootstrap'

import './index.css'

import store from '../../Redux/store'

class Header extends Component {

    constructor() {
        super()

        this.state = {
            appName: store.getState().appName
        }
    }

    render() {

        const { appName } = this.state

        return (
            <header className="app-header">
                <Navbar bg="light" expand="lg">
                    <span className="d-block d-sm-none">
                        <i className="fas fa-fw fa-bars"></i>
                    </span>
                    <Link to="/" className="navbar-brand">
                        <img className="logo" src="/logo.svg" alt="logo" /> {appName}
                    </Link>
                </Navbar>
            </header>
        )
    }
}

export default Header