
/* check string is a valid mail with regex */
const isValidMail = (string) =>{
    let emailRgxp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(string.match(emailRgxp)!==null){
        return true
    }else{
        return false
    }
}

export {isValidMail};