const GetAdminId = ():string =>{
    let token =window.localStorage.getItem("adminId");
    if(token){
        return token
    }else{
        return "no-id";
    }  
}
export default GetAdminId;