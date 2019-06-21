import React from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default function NotFoundPage() {
    return (
        <div>
            <TwoPageBanner 
                currentUri="not-found"
                title="Sorry the page you want to see don't exist"
            />
        </div>
    )
}
