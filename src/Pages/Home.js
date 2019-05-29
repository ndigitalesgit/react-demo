
import React, { Component } from 'react'

import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import ContentHeader from '../Components/ContentHeader'

class HomePage extends Component {

    render() {

        const title = 'Home Page'

        const breadcrumb = [
            { text: 'Home', url: '' }
        ]

        return (
            <div className="home-page">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <ContentHeader title={title} breadcrumb={breadcrumb} />
                </div>
            </div>
        )
    }
}

export default HomePage