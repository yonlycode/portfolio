import React, { Component } from 'react'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';


const AdminPortfolio = () => {
    let content = <>
        <TwoPageBanner 
            currentUri="admin-work"
            title="Gérer le portfolio"
        />
    </>
    return content
}
export default AdminPortfolio
