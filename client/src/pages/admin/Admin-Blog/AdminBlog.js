import React, { Component } from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class AdminBlog extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-blog"
                    title="Gérer le blog"
                />
            </div>
        )
    }
}
