import React from 'react'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

const AdminUpload = () => {
    let content = <>
        <TwoPageBanner 
            currentUri="admin-upload"
            title="Uploader des fichiers"
        />
    </>
    return content
}
export default AdminUpload
