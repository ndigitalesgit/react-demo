
import React from 'react'
import { connect } from 'react-redux'

import { addUser } from '../Redux/actionCreators'

import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import ContentHeader from '../Components/ContentHeader'

import { Row, Col, Card } from 'react-bootstrap'

const UsersEditPage = (props) => {

    const title = 'Users Edit Page'

    const breadcrumb = [
        { text: 'Home', url: '/' },
        { text: 'Users', url: '/users' },
        { text: 'Edit', url: '' },
    ]

    return(
        <div className="users-edit-page">
        <Header />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader title={title} breadcrumb={breadcrumb} />

                <div className="content">
                    edit page
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {

    return {
        addUser(user) {

            dispatch(addUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersEditPage)