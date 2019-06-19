import React, { Component } from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';
import AdminInfo from '../../../components/Admin/Admin-Info/AdminInfo';

export default class AdminAccountSetting extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-setting"
                    title="Want to manage Account?"
                />
                <AdminInfo />
            </div>
        )
    }
}
