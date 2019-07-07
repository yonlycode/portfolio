import Axios from "axios";

const HandleConnection  =  async ( mail :string, password :string):Promise<boolean> =>{
    let uri :string = "/login-admin";


    /* await fetch( IsProd?`http://localhost:4000${uri}`:uri, {
        mode: 'cors',
        headers:new Headers(),
        method:"post",
        body:JSON.stringify({mail:mail,password:password}),
        
    }) */


    return Axios.post( uri , {
        mail,
        password
    })
    .then(res=>{
        if(res.status){
            window.localStorage.setItem('token' , res.data.token);
            window.localStorage.setItem('adminId',res.data.user.split('"')[1]);
            return true;
        }else{
            return false
        }
    })
    .catch(e=>{
        return false
    })
}

export default HandleConnection