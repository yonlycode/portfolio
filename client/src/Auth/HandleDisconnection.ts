const HandleDisconnection  = ():boolean =>{
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('mail')
    window.location.reload();
    return true
}

export default HandleDisconnection