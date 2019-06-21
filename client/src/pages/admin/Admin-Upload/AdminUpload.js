import React, { Component } from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class AdminUpload extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-upload"
                    title="Uploader des fichiers"
                />
            </div>
        )
    }
}
