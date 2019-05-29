
import React, { Component } from 'react'

import { Link } from "react-router-dom"

import { Nav, NavItem } from 'react-bootstrap'

import './index.css'

class Sidebar extends Component {

    render() {

        return (
            <aside className="app-sidebar">
                <Nav defaultActiveKey="/" className="flex-column">
                    <ul>
                        <NavItem>
                            <Link to="/" className="nav-link">
                                <i className="fas fa-fw fa-home"></i> Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/users" className="nav-link">
                                <i className="fas fa-fw fa-users"></i> Users
                            </Link>
                        </NavItem>
                    </ul>
                </Nav>
            </aside>
        )
    }
}

export default Sidebar