import React, { Component } from 'react'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner'
export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin"
                    title="dashboard"
                />
            </div>
        )
    }
}
