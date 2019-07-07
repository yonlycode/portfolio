import Axios from "axios";
import GetToken from "./GetToken";


const HandleDeleteAccount = ( cb :CallableFunction) :boolean=>{
    try{
        Axios({
            method: 'delete',
            url: '/api/admin/'+window.localStorage.getItem("adminId"),
            headers:{'Authorization':"Bearer "+GetToken() }
        })
        .then(res=>{
            return true
        })
        .catch(e=>{
            return false
        })
        .then(res=>{
            cb();
        })
    }catch(e){
        return false
    }
    return true
}

export default HandleDeleteAccount