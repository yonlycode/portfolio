import React, { Component } from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';
import AdminInfo from '../../../components/Admin/Admin-Info/AdminInfo';
import AdminUserList from '../../../components/Admin/Admin-User-List/AdminUserList';

export default class AdminAccountSetting extends Component {
    render() {
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-setting"
                    title="changer vos paramètre?"
                />
                <AdminInfo />
                <h3>Liste des administrateurs </h3>
                <AdminUserList/>
            </div>
        )
    }
}
