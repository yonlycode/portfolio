import React from 'react';
import {useHttpGetOnMount} from '../../../Hooks/useHttp';
import ActivityIndicator from '../../../Components/layout/Activity-Indicator/ActivityIndicator';
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';
import ServicesList from '../../../Components/Services-List/ServiceList';
import HandleDisconnection from '../../../Auth/HandleDisconnection';
import NoRessourceFounded from '../../../Components/layout/No-Ressource-Founded/NoRessourceFounded';

const AdminService = () => {

    const [isLoading, reload, data, error] = useHttpGetOnMount('/api/service',[],true)

    let header = <>
        <TwoPageBanner 
            currentUri="admin-service"
            title="gérer les services"
        />
    </>

    if(isLoading) return <>
        {header}
        <ActivityIndicator/>
    </>

    let withoutContent =<>
        {header}
        <NoRessourceFounded/>
    </>;

    if (data ===null) return withoutContent
    //iff auth error with token handle disconnection
    if (error) return <>
        {HandleDisconnection()}
    </>

    //return content
    return <>
        {header}
        <ServicesList data={data} />
    </>;
}

export default React.memo(AdminService);
