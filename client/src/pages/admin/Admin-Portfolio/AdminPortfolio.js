import React, { Component } from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class AdminPortfolio extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-work"
                    title="Gérer le portfolio"
                />
            </div>
        )
    }
}
