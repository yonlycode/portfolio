import React from 'react';
import { Button, UncontrolledCollapse, Card, CardBody } from 'reactstrap';


import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

import NewAdminForm from '../../../Components/forms/New-Admin-Form/NewAdminForm';
import AccountAdminForm from '../../../Components/forms/AccountAdminForm/AccountAdminForm';
import HandleDeleteAccount from '../../../Auth/HandleDeleteAccount';
import HandleDisconnection from '../../../Auth/HandleDisconnection';
import GetToken from '../../../Auth/GetToken';
import GetAdminId from '../../../Auth/GetAdminId';
import { useHttpGetOnMount } from '../../../Hooks/useHttp';
import ActivityIndicator from '../../../Components/layout/Activity-Indicator/ActivityIndicator';
import NoRessourceFounded from '../../../Components/layout/No-Ressource-Founded/NoRessourceFounded';

const AdminUserList = React.lazy(()=>import('../../../Components/Admin/Admin-User-List/AdminUserList'));

const AdminAccountSetting = () => {

    const [isLoading, reload, data, error] = useHttpGetOnMount('/api/admin/'+GetAdminId(),[],true);



    let header = <>
        <TwoPageBanner 
            currentUri="admin-setting"
            title="Paramètre de compte"
        />
    </>
    
    let content = <>
        {header}
        <div className="container-fluid">
            
            <br/>

            <Button id="update-info" color="warning" size="lg" block>Modifier son compte</Button> 
            <UncontrolledCollapse toggler="#update-info">
                <Card>
                    <CardBody>
                    {<AccountAdminForm  data={data}/>}
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            <br/>
            <Button id="admin-list" color="primary" size="lg" block>Voir les admins</Button>
            <UncontrolledCollapse toggler="#admin-list">
                <Card>
                    <CardBody>
                        <AdminUserList/>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            
            <br/>

            <Button id="create-account" color="success" size="lg" block>Créer un nouveau compte</Button>
            <UncontrolledCollapse toggler="#create-account">
                <Card>
                    <CardBody>
                        <NewAdminForm/>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>


            <br/>

            <Button id="delete-account" color="danger" size="lg" block>Supprimer son compte</Button>
            <UncontrolledCollapse toggler="#delete-account">
                <Card>
                    <CardBody>
                        <p><strong>Attention, vous êtes sur le point de supprimer ce compte, cette action est définitive, Vous ne pourrez pas revenir en arrière.</strong></p>
                        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"80px"}}>
                            <Button onClick={()=>HandleDeleteAccount(HandleDisconnection)} color="success">
                                Confirmer
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            <br/>
        </div>
    </>
    let withoutContent = <>
        {header}
        <NoRessourceFounded/>
    </>;

    if(isLoading) return <>
        {header}
        <ActivityIndicator/>
    </>

    if (data ===null) return withoutContent
    //iff auth error with token handle disconnection
    if (error) return <>
        {HandleDisconnection()}
    </>
    
    return content
}
export default AdminAccountSetting