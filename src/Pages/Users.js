
import React from 'react'
import { connect } from 'react-redux'

import { removeUser } from '../Redux/actionCreators'

import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import ContentHeader from '../Components/ContentHeader'

import { Link } from 'react-router-dom'
import { Row, Col, Card, Table, Button } from 'react-bootstrap'

const UsersPage = ({ users, removeUser }) => {

    const title = 'Users Page'

    const breadcrumb = [
        { text: 'Home', url: '/' },
        { text: 'Users', url: '' }
    ]

    return (
        <div className="users-page">
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader title={title} breadcrumb={breadcrumb} />

                <div className="content">
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Card.Header>
                                    <Link to="/users/edit/new" className="btn btn-sm btn-dark">
                                        <i className="fas fa-fw fa-plus"></i> Nuevo
                                    </Link>
                                </Card.Header>
                                <Card.Body>
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map(user =>
                                                <tr key={user.id}>
                                                    <td>{user.names}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <Button variant="dark" size="sm">
                                                            <i className="fas fa-fw fa-pen"></i> Edit
                                                        </Button>&nbsp;
                                                        <Button variant="danger" size="sm" onClick={() => removeUser(user)}>
                                                            <i className="fas fa-fw fa-trash"></i> Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
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
        removeUser(user) {

            dispatch(removeUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)