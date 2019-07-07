import React, { useState, useCallback, useEffect} from 'react';
import {useHttpGetOnMount} from '../../../Hooks/useHttp';
import ActivityIndicator from '../../../Components/layout/Activity-Indicator/ActivityIndicator';
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';
import ServicesList from '../../../Components/Services-List/ServiceList';
import HandleDisconnection from '../../../Auth/HandleDisconnection';
import NoRessourceFounded from '../../../Components/layout/No-Ressource-Founded/NoRessourceFounded';

const AdminService = () => {

    const [isLoading, reload, data, error] = useHttpGetOnMount('/api/service',[],true)

    //template
    let content =<>
        <TwoPageBanner 
            currentUri="admin-service"
            title="gérer les services"
        />
        {isLoading&&data?<ActivityIndicator/>:
            <ServicesList data={data} />
        }
    </>;

    if (data ==null) return <>
        <NoRessourceFounded/>
    </>
    //iff auth error with token handle disconnection
    if (error) return <>
        {HandleDisconnection()}
    </>

    //return content
    return content;
}
export default React.memo(AdminService);
