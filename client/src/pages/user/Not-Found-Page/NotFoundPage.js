import React from 'react'
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default function NotFoundPage() {
    return (
        <div>
            <TwoPageBanner 
                currentUri="not-found"
            />
            <h1>Sorry the page you want to see don't exist</h1>
        </div>
    )
}
