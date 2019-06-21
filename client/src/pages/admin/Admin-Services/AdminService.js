import React, { Component } from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class AdminService extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-service"
                    title="gérer les services"
                />
            </div>
        )
    }
}
