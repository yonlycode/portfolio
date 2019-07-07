import React from 'react'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

const AdminBlog = () => {
    let content = <>
        <TwoPageBanner 
            currentUri="admin-blog"
            title="Gérer le blog"
        />
    </>
    return content
}
export default AdminBlog