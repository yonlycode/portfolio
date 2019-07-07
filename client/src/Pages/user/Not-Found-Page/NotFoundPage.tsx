import React from 'react'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

const NotFoundPage = () =>{
    let content = <>
        <TwoPageBanner 
            currentUri="not-found"
            title="Sorry the page you want to see don't exist"
        />
    </>;

    return content;
}

export default  NotFoundPage;