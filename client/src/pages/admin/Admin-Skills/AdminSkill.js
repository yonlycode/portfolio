import React, { Component } from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class AdminSkill extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-skill"
                    title="Gérer les compétences"
                />
            </div>
        )
    }
}
