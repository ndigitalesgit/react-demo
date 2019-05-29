
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './index.css'

class ContentHeader extends Component {

    constructor(props) {
        super(props)

        const propTypes = {
            title: PropTypes.string.isRequired,
            breadcrumb: PropTypes.object.isRequired
        }
    }

    render() {

        const { title, breadcrumb } = this.props
        
        return (
            <div className="content-header">
                <h1>{title}</h1>
                <ol className="breadcrumb">
                    {breadcrumb.map((item, index) => 
                        <li key={index} className={item.url === '' ? 'active' : ''}>
                            {item.url !== '' ? (
                                <Link to={item.url}>{item.text}</Link>
                            ) : item.text}
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}

export default ContentHeader