const GetToken = ():string =>{
    let token =window.localStorage.getItem("token");
    if(token){
        return token
    }else{
        return "no-token";
    }  
}
export default GetToken;