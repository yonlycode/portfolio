import React, { Component } from 'react'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner'

const AdminDashboard = () => {
    let content = <>
        <TwoPageBanner 
            currentUri="admin"
            title="dashboard"
        />
    </>
    return content
}
export default AdminDashboard
