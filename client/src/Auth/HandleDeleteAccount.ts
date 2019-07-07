import Axios from "axios";
import GetToken from "./GetToken";


const HandleDeleteAccount = ( cb :CallableFunction)=>{
    Axios({
        method: 'delete',
        url: '/api/admin/'+window.localStorage.getItem("adminId"),
        headers:{'Authorization':"Bearer "+GetToken() }
    })
    .catch(e=>alert(e))
    .then(res=>{
        cb()
    })
}

export default HandleDeleteAccount